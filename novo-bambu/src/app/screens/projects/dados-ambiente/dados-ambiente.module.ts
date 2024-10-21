import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosAmbientePageRoutingModule } from './dados-ambiente-routing.module';

import { DadosAmbientePage } from './dados-ambiente.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AmbienteButtonsComponent } from 'src/app/components/buttons/ambiente-buttons/ambiente-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosAmbientePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DadosAmbientePage, AmbienteButtonsComponent]
})
export class DadosAmbientePageModule {}
