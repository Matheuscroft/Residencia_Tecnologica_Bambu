import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-log',
  templateUrl: './input-log.component.html',
  styleUrls: ['./input-log.component.scss'],
})
export class InputLogComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() type: string = 'text'; // 'text', 'password', 'email', etc.
  @Input() autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' = 'none';

  onValueChange(event: any) {
    this.valueChange.emit(event.detail.value);
  }
}
