import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosMobiliaPageRoutingModule } from './dados-mobilia-routing.module';

import { DadosMobiliaPage } from './dados-mobilia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosMobiliaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DadosMobiliaPage]
})
export class DadosMobiliaPageModule {}
