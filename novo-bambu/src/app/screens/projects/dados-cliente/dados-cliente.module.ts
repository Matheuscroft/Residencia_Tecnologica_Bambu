import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosClientePageRoutingModule } from './dados-cliente-routing.module';

import { DadosClientePage } from './dados-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosClientePageRoutingModule
  ],
  declarations: [DadosClientePage]
})
export class DadosClientePageModule {}
