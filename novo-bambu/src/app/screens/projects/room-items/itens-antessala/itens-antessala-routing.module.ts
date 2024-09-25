import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensAntessalaPage } from './itens-antessala.page';

const routes: Routes = [
  {
    path: '',
    component: ItensAntessalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensAntessalaPageRoutingModule {}
