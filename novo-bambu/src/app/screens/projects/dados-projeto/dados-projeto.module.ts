import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DadosProjetoPageRoutingModule } from './dados-projeto-routing.module';

import { DadosProjetoPage } from './dados-projeto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosProjetoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DadosProjetoPage]
})
export class DadosProjetoPageModule {}
