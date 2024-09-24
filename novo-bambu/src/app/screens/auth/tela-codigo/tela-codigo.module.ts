import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCodigoPageRoutingModule } from './tela-codigo-routing.module';

import { TelaCodigoPage } from './tela-codigo.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TelaCodigoPageRoutingModule
  ],
  declarations: [TelaCodigoPage]
})
export class TelaCodigoPageModule {}
