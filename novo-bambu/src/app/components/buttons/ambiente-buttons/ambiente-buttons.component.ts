import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ambiente-button',
  templateUrl: './ambiente-buttons.component.html',
  styleUrls: ['./ambiente-buttons.component.scss'],
})

export class AmbienteButtonsComponent {

  @Input() nome: string = '';
  @Input() quantidade: number = 0; 
  selecionado: boolean = false;

  selecionar() {
    this.selecionado = !this.selecionado;
    if (!this.selecionado) {
      this.quantidade = 0; 
    }
  }

  constructor() { }

  ngOnInit() {}

}
