import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-ambiente',
  templateUrl: './dados-ambiente.page.html',
  styleUrls: ['./dados-ambiente.page.scss'],
})
export class DadosAmbientePage {
  
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

