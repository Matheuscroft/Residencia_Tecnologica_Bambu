import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetosHomePage } from './projetos-home.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetosHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetosHomePageRoutingModule {}
