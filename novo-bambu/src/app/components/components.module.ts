import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteButtonComponent } from './buttons/white-button/white-button.component';
import { IonicModule } from '@ionic/angular';
import { InputLinkComponent } from './inputs/input-link/input-link.component';
import { ButtonPlusComponent } from './buttons/button-plus/button-plus.component';

@NgModule({
  declarations: [WhiteButtonComponent, InputLinkComponent, ButtonPlusComponent],
  imports: [CommonModule, IonicModule],
  exports: [WhiteButtonComponent, InputLinkComponent, ButtonPlusComponent]  
})
export class ComponentsModule {}
