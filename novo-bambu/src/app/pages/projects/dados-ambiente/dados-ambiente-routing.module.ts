import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosAmbientePage } from './dados-ambiente.page';

const routes: Routes = [
  {
    path: '',
    component: DadosAmbientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosAmbientePageRoutingModule {}
