import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensSalaPageRoutingModule } from './itens-sala-routing.module';

import { ItensSalaPage } from './itens-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensSalaPageRoutingModule
  ],
  declarations: [ItensSalaPage]
})
export class ItensSalaPageModule {}
