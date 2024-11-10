import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'InputSenha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSenhaComponent),
    multi: true
  }]
})
export class InputSenhaComponent implements ControlValueAccessor {
  @Input() senhas: { password: string, confirmPassword: string } = { password: '', confirmPassword: '' };
  @Output() senhaMatch = new EventEmitter<boolean>();

  senhaVisible: boolean = false;
  senhaConfirmVisible: boolean = false;
  senhaMatchMessage: string = '';

  private onChange = (value: any) => {};
  private onTouched = () => {};

  toggleSenhaVisibility() {
    this.senhaVisible = !this.senhaVisible;
  }

  toggleConfirmSenhaVisibility() {
    this.senhaConfirmVisible = !this.senhaConfirmVisible;
  }

  checkSenhaMatch() {
    const match = this.senhas.password === this.senhas.confirmPassword;
    this.senhaMatch.emit(match);
    this.senhaMatchMessage = match ? '' : 'As senhas não coincidem';
    this.onChange(this.senhas); // Atualiza o valor do objeto completo
  }

  writeValue(value: any): void {
    if (value) {
      this.senhas = value.senhas || { password: '', confirmPassword: '' }; // Inicializa corretamente se valor não for passado
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
