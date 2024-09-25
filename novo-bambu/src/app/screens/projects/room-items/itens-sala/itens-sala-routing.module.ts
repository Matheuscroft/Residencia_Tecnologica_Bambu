import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensSalaPage } from './itens-sala.page';

const routes: Routes = [
  {
    path: '',
    component: ItensSalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensSalaPageRoutingModule {}
