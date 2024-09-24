import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComProjetosPage } from './home-com-projetos.page';

const routes: Routes = [
  {
    path: '',
    component: HomeComProjetosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeComProjetosPageRoutingModule {}
