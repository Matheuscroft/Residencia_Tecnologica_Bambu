import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensAntessalaPageRoutingModule } from './itens-antessala-routing.module';

import { ItensAntessalaPage } from './itens-antessala.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensAntessalaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ItensAntessalaPage]
})
export class ItensAntessalaPageModule {}
