import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ambiente-tamanho',
  templateUrl: './ambiente-tamanho.component.html',
  styleUrls: ['./ambiente-tamanho.component.scss'],
})
export class AmbienteTamanhoComponent {
  @Input() nome: string = '';
  @Input() tamanho: string = '';
  @Output() tamanhoMudou = new EventEmitter<string>();

  // Recebe o valor diretamente sem acessar event.target
  onTamanhoChange(valor: string) {
    const numero = valor.replace(/[^\d]/g, ''); // Permite apenas números
    this.tamanho = `${numero} m²`;
    this.tamanhoMudou.emit(this.tamanho);
  }
}
