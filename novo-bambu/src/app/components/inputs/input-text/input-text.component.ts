import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component ({
    selector: 'InputText',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputTextComponent),
        multi: true
      }
    ]
})

export class InputTextComponent implements ControlValueAccessor {
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    // Valor do input
  private _value: string = '';

  // Funções passadas pelo Angular para notificar mudanças e toque
  private onChange = (value: any) => {};
  private onTouched = () => {};

  // Getter e Setter para o valor
  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this.onChange(val); // Notifica a mudança
  }

  // Implementação dos métodos da interface ControlValueAccessor

  // Escreve um valor no componente (usado pelo Angular)
  writeValue(value: string): void {
    this._value = value;
  }

  // Registra uma função para notificar mudanças
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  // Registra uma função para notificar que o componente foi "tocado"
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Define o estado de desativado do input
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  isDisabled = false;

  // Função chamada ao atualizar o valor do input no template
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
  }

  // Função para detectar toque no input
  onBlur(): void {
    this.onTouched();
  }
}
