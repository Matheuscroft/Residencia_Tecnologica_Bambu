import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {

  month: string = 'Julho';
  year: number = 2020;

  weekdays: string[] = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  daysOfMonth: string[] = [
    '28', '29', '30', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', '10', '11',
    '12', '13', '14', '15', '16', '17', '18',
    '19', '20', '21', '22', '23', '24', '25',
    '26', '27', '28', '29', '30', '31', '1'
  ];

  events: { text: string, time: string }[] = [
    { text: 'Fazer um bolo', time: '16:30' },
    { text: 'Correr', time: '18:30' },
    { text: 'Reunião de trabalho', time: '20:00' }
  ];

}
