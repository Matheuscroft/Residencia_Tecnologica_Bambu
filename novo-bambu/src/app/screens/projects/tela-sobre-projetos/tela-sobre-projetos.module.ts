import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaSobreProjetosPageRoutingModule } from './tela-sobre-projetos-routing.module';

import { TelaSobreProjetosPage } from './tela-sobre-projetos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaSobreProjetosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TelaSobreProjetosPage]
})
export class TelaSobreProjetosPageModule {}
