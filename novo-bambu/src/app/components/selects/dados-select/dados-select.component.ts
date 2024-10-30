import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'DadosSelect',
  templateUrl: './dados-select.component.html',
  styleUrls: ['./dados-select.component.scss'],
})
export class DadosSelectComponent  implements OnInit {

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
