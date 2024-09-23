import { Component, Input } from '@angular/core';

@Component({
  selector: 'WhiteButton',
  templateUrl: './white-button.component.html',
  styleUrls: ['./white-button.component.scss'],
})
export class WhiteButtonComponent {
  @Input() text: string = 'Button';
  @Input() onClick: () => void = () => {};
}
