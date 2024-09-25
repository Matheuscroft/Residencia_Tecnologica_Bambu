/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}*/

import { Component, Input } from '@angular/core';
//import { CORES } from '../../shared/constants/cores';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() projectTitle: string = 'Projeto Exemplo';
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  @Input() progress: number = 0;

  //cores = CORES;

  constructor() { }

  ngOnInit() {}
}
