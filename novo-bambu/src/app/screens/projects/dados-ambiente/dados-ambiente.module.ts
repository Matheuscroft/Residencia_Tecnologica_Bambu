import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosAmbientePageRoutingModule } from './dados-ambiente-routing.module';

import { DadosAmbientePage } from './dados-ambiente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosAmbientePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DadosAmbientePage]
})
export class DadosAmbientePageModule {}
