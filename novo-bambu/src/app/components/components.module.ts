import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteButtonComponent } from './buttons/white-button/white-button.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [WhiteButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [WhiteButtonComponent]  
})
export class ComponentsModule {}
