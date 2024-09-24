import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetosHomePageRoutingModule } from './projetos-home-routing.module';

import { ProjetosHomePage } from './projetos-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetosHomePageRoutingModule
  ],
  declarations: [ProjetosHomePage]
})
export class ProjetosHomePageModule {}
