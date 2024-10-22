import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Certifique-se de que o FormsModule está importado
import { IonicModule } from '@ionic/angular';
import { DadosAmbientesTamanhoPageRoutingModule } from './dados-ambientes-tamanho-routing.module';
import { DadosAmbientesTamanhoPage } from './dados-ambientes-tamanho.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  // FormsModule é necessário para o ngModel funcionar
    IonicModule,
    DadosAmbientesTamanhoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DadosAmbientesTamanhoPage]
})
export class DadosAmbientesTamanhoPageModule {}

