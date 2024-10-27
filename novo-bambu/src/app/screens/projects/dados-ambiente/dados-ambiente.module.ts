import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DadosAmbientePageRoutingModule } from './dados-ambiente-routing.module';
import { DadosAmbientePage } from './dados-ambiente.page';
import { ComponentsModule } from 'src/app/components/components.module';

// Importe o componente AmbienteInputComponent
import { AmbienteInputComponent } from 'src/app/components/inputs/ambiente-input/ambiente-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosAmbientePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    DadosAmbientePage,
    // Declare o componente AmbienteInputComponent aqui
    AmbienteInputComponent,
  ]
})
export class DadosAmbientePageModule {}
