import { Component, Input } from '@angular/core';

@Component({
  selector: 'InputTelefone',
  templateUrl: './input-telefone.component.html',
  styleUrls: ['./input-telefone.component.scss']
})
export class InputTelefoneComponent {
  @Input() phone: string = '';

  formatPhone(event: any) {
    let phone = event.target.value.replace(/\D/g, '');
    if (phone.length > 15) phone = phone.substring(0, 15);
    if (phone.length > 0) phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
    if (phone.length > 6) phone = phone.replace(/(\d{5})(\d)/, '$1-$2');
    this.phone = phone;
    event.target.value = this.phone;
  }
}
