import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosAmbientesTamanhoPageRoutingModule } from './dados-ambientes-tamanho-routing.module';

import { DadosAmbientesTamanhoPage } from './dados-ambientes-tamanho.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosAmbientesTamanhoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DadosAmbientesTamanhoPage]
})
export class DadosAmbientesTamanhoPageModule {}
