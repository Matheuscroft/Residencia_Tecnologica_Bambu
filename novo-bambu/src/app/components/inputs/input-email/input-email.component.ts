import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'InputEmail',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputEmailComponent),
    multi: true
  }]
})
export class InputEmailComponent implements ControlValueAccessor {
  @Input() email: string = '';
  isValid: boolean = true;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  validateEmail(event: any) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isValid = emailPattern.test(event.target.value);
    this.email = event.target.value;
    this.onChange(this.email);
  }

  writeValue(value: any): void {
    this.email = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
