import { Component } from '@angular/core';

@Component({
  selector: 'app-itens-sala',
  templateUrl: 'itens-sala.page.html',
  styleUrls: ['itens-sala.page.scss'],
})
export class ItensSalaPage {
  roomItems = [
    'Itens Sala - Chão',
    'Itens Sala - Parede',
    'Itens Sala - Teto',
  ];

  chipItemsChao = [
    'Tapete', 'Sofá', 'Raque', 'Vasos', 'Mesa Centro',
    'Poltrona', 'Puff', 'Banco', 'Cadeiras',
    'Futon', 'Bancos', 'Mesa Lateral',
  ];

  chipItemsParede = [
    'Estantes de parede', 'Prateleiras',
    'Nichos', 'Suporte pra TV', 'Espelhos',
    'Cabideiros', 'Caixas Org.', 'Placas', 'Letreiros',
    'Quadros', 'Vasos de planta', 'Galerias',
  ];

  chipItemsTeto = [
    'Lustres', 'Plafons', 'Arandelas',
    'Ventilador', 'Cortinas', 'Toldos',
    'Painéis acústicos', 'Sistema de som',
    'Barras de apoio',
  ];

  expandedIndex: number | null = null;
  selectedChips = {
    chao: [] as string[],
    parede: [] as string[],
    teto: [] as string[],
  };

  handlePress(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  handleChipPress(chip: string, type: 'chao' | 'parede' | 'teto') {
    const newSelected = { ...this.selectedChips };
    if (newSelected[type].includes(chip)) {
      newSelected[type] = newSelected[type].filter(item => item !== chip);
    } else {
      newSelected[type].push(chip);
    }
    this.selectedChips = newSelected;
  }
}
