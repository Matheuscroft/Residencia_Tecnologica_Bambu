import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensQuartoPage } from './itens-quarto.page';

const routes: Routes = [
  {
    path: '',
    component: ItensQuartoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensQuartoPageRoutingModule {}
