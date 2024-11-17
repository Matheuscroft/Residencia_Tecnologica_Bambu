import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'InputValor',
  templateUrl: './input-valor.component.html',
  styleUrls: ['./input-valor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputValorComponent),
      multi: true,
    },
  ],
})
export class InputValorComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'R$ 0,00';
  value: number = 0; // Valor real usado para salvar e processar
  displayValue: string = ''; // Valor formatado exibido no input
  @Input() text: string = '';

  onChange = (value: number) => {};
  onTouched = () => {};

  // Método chamado quando o usuário altera o valor no input
  updateValue(event: any) {
    const rawValue = event.target.value.replace(/[^\d]/g, ''); // Remove tudo que não for número
    this.value = parseFloat(rawValue) / 100; // Converte para float com centavos
    this.displayValue = this.formatCurrency(this.value); // Atualiza o valor formatado
    this.onChange(this.value); // Emite o valor real (não formatado)
  }

  // Formata o valor como moeda
  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  // Implementação de ControlValueAccessor
  writeValue(value: number): void {
    this.value = value || 0;
    this.displayValue = this.formatCurrency(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
