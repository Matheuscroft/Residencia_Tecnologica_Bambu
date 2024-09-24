import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaSobreProjetosPage } from './tela-sobre-projetos.page';

const routes: Routes = [
  {
    path: '',
    component: TelaSobreProjetosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaSobreProjetosPageRoutingModule {}
