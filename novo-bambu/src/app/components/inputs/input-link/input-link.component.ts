import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'InputLink',
  templateUrl: './input-link.component.html',
  styleUrls: ['./input-link.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputLinkComponent),
      multi: true
    }
  ]
})


export class InputLinkComponent {
  @Input() placeholder: string = '';
  @Input() text: string = '';
  @Input() keyboardType: string = 'text';
  @Input() autoCapitalize: string = 'none';
  @Input() maxlength?: number;
  value: string = '';

  onChange = (value: string) => {};
  onTouched = () => {};

  updateValue(event: any) {
    const newValue = event.target.value;
    this.value = newValue;
    this.onChange(newValue); 
  }


  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
