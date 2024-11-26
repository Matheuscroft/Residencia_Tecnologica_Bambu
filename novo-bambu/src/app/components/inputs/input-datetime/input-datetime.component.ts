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

  @Output() selectedDateChange = new EventEmitter<string>();

  onDateSelected(event: any) {
    this.selectedDate = event.detail.value;
    this.selectedDateChange.emit(this.selectedDate); 
  }
}
