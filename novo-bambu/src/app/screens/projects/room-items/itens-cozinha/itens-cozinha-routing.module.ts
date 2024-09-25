import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensCozinhaPage } from './itens-cozinha.page';

const routes: Routes = [
  {
    path: '',
    component: ItensCozinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensCozinhaPageRoutingModule {}
