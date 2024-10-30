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
import { ProjectCardComponent } from './cards/project-card/project-card.component';
import { ProjectStatusFormComponent } from './forms/project-status-form/project-status-form.component';
import { StatusSelectComponent } from './selects/status-select/status-select.component';
import { DadosSelectComponent } from './selects/dados-select/dados-select.component';

@NgModule({
  declarations: [WhiteButtonComponent, InputLinkComponent, ButtonPlusComponent, ButtonLinkComponent, 
    ButtonInfoComponent, ToolbarVoltarComponent, ProjectSegmentComponent, ProjectModalComponent, ProjectCardComponent, ProjectStatusFormComponent, StatusSelectComponent, DadosSelectComponent],
  imports: [CommonModule, IonicModule],
  exports: [WhiteButtonComponent, InputLinkComponent, ButtonPlusComponent, ButtonLinkComponent, ButtonInfoComponent, 
    ToolbarVoltarComponent, ProjectSegmentComponent, ProjectModalComponent, ProjectCardComponent, ProjectStatusFormComponent, StatusSelectComponent, DadosSelectComponent]  
})
export class ComponentsModule {}
