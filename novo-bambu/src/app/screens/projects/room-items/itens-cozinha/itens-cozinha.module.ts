import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensCozinhaPageRoutingModule } from './itens-cozinha-routing.module';

import { ItensCozinhaPage } from './itens-cozinha.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensCozinhaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ItensCozinhaPage]
})
export class ItensCozinhaPageModule {}
