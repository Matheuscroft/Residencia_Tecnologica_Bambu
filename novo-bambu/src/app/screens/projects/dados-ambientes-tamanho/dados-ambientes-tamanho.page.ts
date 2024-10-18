import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-ambientes-tamanho',
  templateUrl: './dados-ambientes-tamanho.page.html',
  styleUrls: ['./dados-ambientes-tamanho.page.scss'],
})
export class DadosAmbientesTamanhoPage {
  furnitureTypes: string[] = [
    'Rústica', 'Escandinava', 'Art Deco',  'Boêmio',  'Clássica',
    'Moderno', 'Contemporânea', 'Industrial','Colonial',
  ];

  selectedTypes: string[] = [];

  

  constructor() {
  }

  toggleSelection(type: string) {
    const index = this.selectedTypes.indexOf(type);
    if (index > -1) {
      this.selectedTypes.splice(index, 1);
    } else {
      this.selectedTypes.push(type);
    }
  }

  isSelected(type: string): boolean {
    return this.selectedTypes.includes(type);
  }
}
