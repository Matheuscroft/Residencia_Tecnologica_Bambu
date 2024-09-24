import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosClientePage } from './dados-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: DadosClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosClientePageRoutingModule {}
