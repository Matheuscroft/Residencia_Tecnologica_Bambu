import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ProjectModal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent  implements OnInit {


  @Input() selectedSegment: string = 'etapas';

  constructor() { }

  ngOnInit() {}

}
