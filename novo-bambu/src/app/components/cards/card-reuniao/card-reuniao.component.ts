import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'CardReuniao',
  templateUrl: './card-reuniao.component.html',
  styleUrls: ['./card-reuniao.component.scss'],
})
export class CardReuniaoComponent {
  @Input() nome: string = 'Reunião';
  @Input() data: string = '';
  @Input() hora: string = '';

  @Output() cardClicado = new EventEmitter<void>(); // Define o evento

  toggleExpanded() {
    this.cardClicado.emit(); // Emite o evento ao clicar no card
  }
}
