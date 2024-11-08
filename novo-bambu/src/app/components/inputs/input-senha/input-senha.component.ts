import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'InputSenha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.scss']
})
export class InputSenhaComponent {
  @Input() senha: string = '';
  @Input() confirmSenha: string = '';
  @Output() senhaMatch = new EventEmitter<boolean>();
  
  senhaVisible: boolean = false;
  senhaConfirmVisible: boolean = false;
  senhaMatchMessage: string = '';

  toggleSenhaVisibility() {
    this.senhaVisible = !this.senhaVisible;
  }

  toggleConfirmSenhaVisibility() {
    this.senhaConfirmVisible = !this.senhaConfirmVisible;
  }

  checkSenhaMatch() {
    const match = this.senha === this.confirmSenha;
    this.senhaMatch.emit(match);
    this.senhaMatchMessage = match ? '' : 'As senhas não coincidem';
  }
}

