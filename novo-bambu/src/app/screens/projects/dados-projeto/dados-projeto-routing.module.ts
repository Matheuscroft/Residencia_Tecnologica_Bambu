import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosProjetoPage } from './dados-projeto.page';

const routes: Routes = [
  {
    path: '',
    component: DadosProjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosProjetoPageRoutingModule {}
