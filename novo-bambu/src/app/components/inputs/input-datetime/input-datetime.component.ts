import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'InputDatetime',
  templateUrl: './input-datetime.component.html',
  styleUrls: ['./input-datetime.component.scss'],
})
export class InputDatetimeComponent {

  @Input() selectedDate: string | undefined;
  @Input() label: string = 'Data';
  @Input() datetimeId: string = '';

  // Emite a nova data selecionada para o componente pai
  @Output() selectedDateChange = new EventEmitter<string>();

  // Método acionado quando a data é alterada no ion-datetime
  onDateSelected(event: any) {
    this.selectedDate = event.detail.value;
    this.selectedDateChange.emit(this.selectedDate); // Emite o novo valor para o componente pai
  }
}
