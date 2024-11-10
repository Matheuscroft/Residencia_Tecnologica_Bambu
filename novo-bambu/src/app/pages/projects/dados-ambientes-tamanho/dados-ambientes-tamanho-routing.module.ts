import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosAmbientesTamanhoPage } from './dados-ambientes-tamanho.page';

const routes: Routes = [
  {
    path: '',
    component: DadosAmbientesTamanhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosAmbientesTamanhoPageRoutingModule {}
