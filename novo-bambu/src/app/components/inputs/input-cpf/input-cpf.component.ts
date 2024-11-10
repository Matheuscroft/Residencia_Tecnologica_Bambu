import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'InputCpf',
  templateUrl: './input-cpf.component.html',
  styleUrls: ['./input-cpf.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputCPFComponent),
    multi: true
  }]
})
export class InputCPFComponent implements ControlValueAccessor {
  @Input() cpf: string = '';

  private onChange = (value: any) => {};
  private onTouched = () => {};

  formatCPF(event: any) {
    let cpf = event.target.value.replace(/\D/g, '');
    if (cpf.length > 11) cpf = cpf.substring(0, 11);
    if (cpf.length > 3) cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2');
    if (cpf.length > 6) cpf = cpf.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    if (cpf.length > 9) cpf = cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    this.cpf = cpf;
    this.onChange(this.cpf);
  }

  writeValue(value: any): void {
    this.cpf = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
