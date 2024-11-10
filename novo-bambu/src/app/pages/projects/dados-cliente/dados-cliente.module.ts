import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosClientePageRoutingModule } from './dados-cliente-routing.module';

import { DadosClientePage } from './dados-cliente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosClientePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DadosClientePage]
})
export class DadosClientePageModule {}
