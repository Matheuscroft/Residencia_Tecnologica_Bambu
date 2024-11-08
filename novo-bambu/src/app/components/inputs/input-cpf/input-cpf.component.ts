import { Component, Input } from '@angular/core';

@Component({
  selector: 'InputCpf',
  templateUrl: './input-cpf.component.html',
  styleUrls: ['./input-cpf.component.scss']
})
export class InputCPFComponent {
  @Input() cpf: string = '';

  formatCPF(event: any) {
    let cpf = event.target.value.replace(/\D/g, '');
    if (cpf.length > 11) cpf = cpf.substring(0, 11);
    if (cpf.length > 3) cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2');
    if (cpf.length > 6) cpf = cpf.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    if (cpf.length > 9) cpf = cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    this.cpf = cpf;
    event.target.value = this.cpf;
  }
}
