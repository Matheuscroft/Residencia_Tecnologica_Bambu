import { Component, Input } from '@angular/core';

@Component({
  selector: 'InputEmail',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent {
  @Input() email: string = '';
  isValid: boolean = true;

  validateEmail(event: any) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isValid = emailPattern.test(event.target.value);
    this.email = event.target.value;
  }
}
