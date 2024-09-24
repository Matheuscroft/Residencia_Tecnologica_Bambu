import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaCodigoPage } from './tela-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: TelaCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaCodigoPageRoutingModule {}
