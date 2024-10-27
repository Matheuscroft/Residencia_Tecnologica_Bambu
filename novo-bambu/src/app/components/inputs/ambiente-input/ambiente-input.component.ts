import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ambiente-input',
  templateUrl: './ambiente-input.component.html',
  styleUrls: ['./ambiente-input.component.scss'],
})
export class AmbienteInputComponent {
  nome: string = '';
  quantidade: number = 0;

  @Output() nomeMudou = new EventEmitter<string>();
  @Output() quantidadeMudou = new EventEmitter<number>();
  @Output() remover = new EventEmitter<void>(); // Novo evento para remoção

  onNomeChange() {
    this.nomeMudou.emit(this.nome);
  }

  onQuantidadeChange() {
    this.quantidadeMudou.emit(this.quantidade);
  }

  removerComponente() {
    this.remover.emit(); // Emite o evento de remoção para o componente pai
  }
}

