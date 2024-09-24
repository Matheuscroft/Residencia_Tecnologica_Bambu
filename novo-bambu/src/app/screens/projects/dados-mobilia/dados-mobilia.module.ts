import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosMobiliaPageRoutingModule } from './dados-mobilia-routing.module';

import { DadosMobiliaPage } from './dados-mobilia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosMobiliaPageRoutingModule
  ],
  declarations: [DadosMobiliaPage]
})
export class DadosMobiliaPageModule {}
