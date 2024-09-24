import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProjetosHomePage } from './screens/projects/projetos-home/projetos-home.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'projetos-home',
    loadChildren: () => import('./screens/projects/projetos-home/projetos-home.module').then( m => m.ProjetosHomePageModule)
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./screens/auth/esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/auth/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
