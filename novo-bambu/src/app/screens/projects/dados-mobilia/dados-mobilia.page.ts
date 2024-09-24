import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-mobilia',
  templateUrl: './dados-mobilia.page.html',
  styleUrls: ['./dados-mobilia.page.scss'],
})
export class DadosMobiliaPage {
  furnitureTypes: string[] = [
    'Rústica', 'Escandinava', 'Art Deco',  'Boêmio',  'Clássica',
    'Moderno', 'Contemporânea', 'Industrial','Colonial',
  ];

  selectedTypes: string[] = [];

  roomItems = [
    { name: 'Itens Sala', link: '/itens-sala' },
    { name: 'Itens Quarto', link: '/itens-quarto' },
    { name: 'Itens Cozinha', link: '/itens-cozinha' },
    { name: 'Itens Antessala', link: '/itens-antessala' },
  ];

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
