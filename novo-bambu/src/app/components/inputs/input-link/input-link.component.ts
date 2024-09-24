import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'InputLink',
  templateUrl: './input-link.component.html',
  styleUrls: ['./input-link.component.scss'],
})


export class InputLinkComponent {
  @Input() placeholder: string = '';
  @Input() text: string = '';
  @Input() keyboardType: string = 'text';
  @Input() autoCapitalize: string = 'none';
}
