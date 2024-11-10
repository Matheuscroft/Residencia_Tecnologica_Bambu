import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'InputTelefone',
  templateUrl: './input-telefone.component.html',
  styleUrls: ['./input-telefone.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTelefoneComponent),
    multi: true
  }]
})
export class InputTelefoneComponent implements ControlValueAccessor {
  @Input() phone: string = '';

  private onChange = (value: any) => {};
  private onTouched = () => {};

  formatPhone(event: any) {
    let phone = event.target.value.replace(/\D/g, '');
    if (phone.length > 15) phone = phone.substring(0, 15);
    if (phone.length > 0) phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
    if (phone.length > 6) phone = phone.replace(/(\d{5})(\d)/, '$1-$2');
    this.phone = phone;
    this.onChange(this.phone);
  }

  writeValue(value: any): void {
    this.phone = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
