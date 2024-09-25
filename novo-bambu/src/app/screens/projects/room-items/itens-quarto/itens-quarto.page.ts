import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-itens-quarto',
  templateUrl: './itens-quarto.page.html',
  styleUrls: ['./itens-quarto.page.scss'],
})
export class ItensQuartoPage {
  expandedIndex: number | null = null;
  selectedChips: { [key: string]: string[] } = { chao: [], parede: [], teto: [] };

  roomItems = [
    'Itens Quarto - Chão',
    'Itens Quarto - Parede',
    'Itens Quarto - Teto',
  ];

  chipItemsChao = [
    'Cama', 'Tapete', 'Mesa de Cabeceira', 'Cômoda', 'Baú', 'Puff', 
    'Espelho de Chão', 'Poltrona', 'Banco', 'Sofá-Cama', 'Guarda-Roupa',
  ];

  chipItemsParede = [
    'Prateleiras', 'Quadros', 'Espelhos', 'Painéis', 'Cabideiros', 
    'Ganchos', 'Relógios', 'Arandelas', 'Vasos de Planta', 'Decorações de Parede',
  ];

  chipItemsTeto = [
    'Lustres', 'Plafons', 'Arandelas', 'Ventilador de Teto', 'Cortinas', 
    'Persianas', 'Painéis Acústicos', 'Luminárias Suspensas', 'Sistema de Som',
  ];

  constructor(private navCtrl: NavController) {}

  handlePress(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  handleChipPress(chip: string, index: number) {
    const type = this.getTypeForIndex(index);
    if (this.selectedChips[type].includes(chip)) {
      this.selectedChips[type] = this.selectedChips[type].filter(item => item !== chip);
    } else {
      this.selectedChips[type].push(chip);
    }
  }

  isSelected(chip: string, index: number) {
    const type = this.getTypeForIndex(index);
    return this.selectedChips[type].includes(chip);
  }

  getChipsForItem(item: string) {
    switch(item) {
      case 'Itens Quarto - Chão':
        return this.chipItemsChao;
      case 'Itens Quarto - Parede':
        return this.chipItemsParede;
      case 'Itens Quarto - Teto':
        return this.chipItemsTeto;
      default:
        return [];
    }
  }

  getTypeForIndex(index: number): string {
    switch(this.roomItems[index]) {
      case 'Itens Quarto - Chão':
        return 'chao';
      case 'Itens Quarto - Parede':
        return 'parede';
      case 'Itens Quarto - Teto':
        return 'teto';
      default:
        return '';
    }
  }

  goToNextPage() {
    this.navCtrl.navigateForward('/dados-mobilia');
  }
}
