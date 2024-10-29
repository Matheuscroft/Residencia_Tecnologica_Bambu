import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteButtonComponent } from './buttons/white-button/white-button.component';
import { IonicModule } from '@ionic/angular';
import { InputLinkComponent } from './inputs/input-link/input-link.component';
import { ButtonPlusComponent } from './buttons/button-plus/button-plus.component';
import { ButtonLinkComponent } from './buttons/button-link/button-link.component';
import { ButtonInfoComponent } from './buttons/button-info/button-info.component';
import { ToolbarVoltarComponent } from './toolbars/toolbar-voltar/toolbar-voltar.component';
import { ProjectSegmentComponent } from './segments/project-segment/project-segment.component';
import { ProjectModalComponent } from './modals/project-modal/project-modal.component';

@NgModule({
  declarations: [WhiteButtonComponent, InputLinkComponent, ButtonPlusComponent, ButtonLinkComponent, ButtonInfoComponent, ToolbarVoltarComponent, ProjectSegmentComponent, ProjectModalComponent],
  imports: [CommonModule, IonicModule],
  exports: [WhiteButtonComponent, InputLinkComponent, ButtonPlusComponent, ButtonLinkComponent, ButtonInfoComponent, ToolbarVoltarComponent, ProjectSegmentComponent, ProjectModalComponent]  
})
export class ComponentsModule {}
