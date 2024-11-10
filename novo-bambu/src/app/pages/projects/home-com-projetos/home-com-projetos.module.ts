import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomeComProjetosPageRoutingModule } from './home-com-projetos-routing.module';
import { HomeComProjetosPage } from './home-com-projetos.page';
import { ComponentsModule } from 'src/app/components/components.module'; // Certifique-se de que o caminho está correto

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeComProjetosPageRoutingModule,
    ComponentsModule // Importa ComponentsModule onde ProjectCardComponent está declarado
  ],
  declarations: [HomeComProjetosPage], // HomeComProjetosPage está declarado aqui
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Permite elementos personalizados no template
})
export class HomeComProjetosPageModule {}