import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeComProjetosPageRoutingModule } from './home-com-projetos-routing.module';

import { HomeComProjetosPage } from './home-com-projetos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeComProjetosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomeComProjetosPage]
})
export class HomeComProjetosPageModule {}
