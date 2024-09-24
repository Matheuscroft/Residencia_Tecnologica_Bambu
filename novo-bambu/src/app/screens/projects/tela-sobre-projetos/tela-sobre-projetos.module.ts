import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaSobreProjetosPageRoutingModule } from './tela-sobre-projetos-routing.module';

import { TelaSobreProjetosPage } from './tela-sobre-projetos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaSobreProjetosPageRoutingModule
  ],
  declarations: [TelaSobreProjetosPage]
})
export class TelaSobreProjetosPageModule {}
