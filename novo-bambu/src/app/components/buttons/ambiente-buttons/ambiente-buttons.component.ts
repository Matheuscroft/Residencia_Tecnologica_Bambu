import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ambiente-button',
  templateUrl: './ambiente-buttons.component.html',
  styleUrls: ['./ambiente-buttons.component.scss'],
})
export class AmbienteButtonsComponent {
  @Input() nome: string = '';
  @Input() quantidade: number = 0;
  @Output() quantidadeMudou = new EventEmitter<number>(); // Emite a quantidade para o pai
  selecionado: boolean = false;

  selecionar() {
    this.selecionado = !this.selecionado;
    if (!this.selecionado) {
      this.quantidade = 0;
      this.quantidadeMudou.emit(this.quantidade); // Emite quantidade zero ao desmarcar
    }
  }

  // Método para emitir a mudança de quantidade ao alterar o valor
  onQuantidadeChange() {
    this.quantidadeMudou.emit(this.quantidade);
  }
}
