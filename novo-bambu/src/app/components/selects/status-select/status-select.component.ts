import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'StatusSelect',
  templateUrl: './status-select.component.html',
  styleUrls: ['./status-select.component.scss'],
})
export class StatusSelectComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() label!: string;
  @Input() options!: { label: string, value: string }[];
  @Input() selectedValue!: string;
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(event: any) {
    this.valueChange.emit(event.detail.value);
  }

}
