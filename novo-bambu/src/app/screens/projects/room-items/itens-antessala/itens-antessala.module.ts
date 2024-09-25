import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensAntessalaPageRoutingModule } from './itens-antessala-routing.module';

import { ItensAntessalaPage } from './itens-antessala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensAntessalaPageRoutingModule
  ],
  declarations: [ItensAntessalaPage]
})
export class ItensAntessalaPageModule {}
