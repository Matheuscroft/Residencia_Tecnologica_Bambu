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
    path: 'dados-mobilia',
    loadChildren: () => import('./screens/projects/dados-mobilia/dados-mobilia.module').then( m => m.DadosMobiliaPageModule)
  },
  {
    path: 'home-com-projetos',
    loadChildren: () => import('./screens/projects/home-com-projetos/home-com-projetos.module').then( m => m.HomeComProjetosPageModule)
  },
  {
    path: 'tela-sobre-projetos',
    loadChildren: () => import('./screens/projects/tela-sobre-projetos/tela-sobre-projetos.module').then( m => m.TelaSobreProjetosPageModule)
  },
  {
    path: 'itens-antessala',
    loadChildren: () => import('./screens/projects/room-items/itens-antessala/itens-antessala.module').then( m => m.ItensAntessalaPageModule)
  },
  {
    path: 'itens-cozinha',
    loadChildren: () => import('./screens/projects/room-items/itens-cozinha/itens-cozinha.module').then( m => m.ItensCozinhaPageModule)
  },
  {
    path: 'itens-quarto',
    loadChildren: () => import('./screens/projects/room-items/itens-quarto/itens-quarto.module').then( m => m.ItensQuartoPageModule)
  },
  {
    path: 'itens-sala',
    loadChildren: () => import('./screens/projects/room-items/itens-sala/itens-sala.module').then( m => m.ItensSalaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
