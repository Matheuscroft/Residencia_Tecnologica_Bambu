import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetosHomePageRoutingModule } from './projetos-home-routing.module';

import { ProjetosHomePage } from './projetos-home.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetosHomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProjetosHomePage]
})
export class ProjetosHomePageModule {}
