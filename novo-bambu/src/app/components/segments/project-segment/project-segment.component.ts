import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ProjectSegment',
  templateUrl: './project-segment.component.html',
  styleUrls: ['./project-segment.component.scss'],
})
export class ProjectSegmentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Output() segmentChanged = new EventEmitter<string>();
  
  onSegmentChange(value: any) {
    const stringValue = String(value); 
    this.segmentChanged.emit(stringValue); 
  }
  
  

}
