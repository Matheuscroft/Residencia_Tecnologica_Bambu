import { Component, Input } from '@angular/core';

@Component({
  selector: 'ToolbarVoltar',
  templateUrl: './toolbar-voltar.component.html',
  styleUrls: ['./toolbar-voltar.component.scss'],
})

export class ToolbarVoltarComponent {
  @Input() title: string = 'Título';
  @Input() defaultHref: string = '/';
}
