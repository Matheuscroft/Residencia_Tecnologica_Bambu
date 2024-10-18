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
  {
    path: 'tela-codigo',
    loadChildren: () => import('./screens/auth/tela-codigo/tela-codigo.module').then( m => m.TelaCodigoPageModule)
  },
  {
    path: 'dados-cliente',
    loadChildren: () => import('./screens/projects/dados-cliente/dados-cliente.module').then( m => m.DadosClientePageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./screens/projects/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'dados-projeto',
    loadChildren: () => import('./screens/projects/dados-projeto/dados-projeto.module').then( m => m.DadosProjetoPageModule)
  },
  {
    path: 'dados-ambiente',
    loadChildren: () => import('./screens/projects/dados-ambiente/dados-ambiente.module').then( m => m.DadosAmbientePageModule)
  },
  {
    path: 'dados-ambientes-tamanho',
    loadChildren: () => import('./screens/projects/dados-ambientes-tamanho/dados-ambientes-tamanho.module').then( m => m.DadosAmbientesTamanhoPageModule)
  },
  {
    path: 'home-com-projetos',
    loadChildren: () => import('./screens/projects/home-com-projetos/home-com-projetos.module').then( m => m.HomeComProjetosPageModule)
  },
  {
    path: 'tela-sobre-projetos',
    loadChildren: () => import('./screens/projects/tela-sobre-projetos/tela-sobre-projetos.module').then( m => m.TelaSobreProjetosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
