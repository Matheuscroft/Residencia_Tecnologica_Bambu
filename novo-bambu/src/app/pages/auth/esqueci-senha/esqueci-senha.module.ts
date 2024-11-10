import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueciSenhaPageRoutingModule } from './esqueci-senha-routing.module';

import { EsqueciSenhaPage } from './esqueci-senha.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EsqueciSenhaPageRoutingModule
  ],
  declarations: [EsqueciSenhaPage]
})
export class EsqueciSenhaPageModule {}
