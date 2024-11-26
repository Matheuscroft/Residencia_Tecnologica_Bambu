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

  @Output() cardClicado = new EventEmitter<void>(); 

  toggleExpanded() {
    this.cardClicado.emit(); 
  }

  formatarDataHora() {
    const dataObj = new Date(this.data);

    const dia = String(dataObj.getUTCDate()).padStart(2, '0'); 
    const mes = String(dataObj.getUTCMonth() + 1).padStart(2, '0'); 
    const ano = dataObj.getUTCFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;

    const horaFormatada = dataObj.toISOString().slice(11, 16);

    return { dataFormatada, horaFormatada };
  }

  get dataFormatada() {
    return this.formatarDataHora().dataFormatada;
  }

  get horaFormatada() {
    return this.formatarDataHora().horaFormatada;
  }
}
