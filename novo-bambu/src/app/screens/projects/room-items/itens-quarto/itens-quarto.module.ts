import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensQuartoPageRoutingModule } from './itens-quarto-routing.module';

import { ItensQuartoPage } from './itens-quarto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensQuartoPageRoutingModule
  ],
  declarations: [ItensQuartoPage]
})
export class ItensQuartoPageModule {}