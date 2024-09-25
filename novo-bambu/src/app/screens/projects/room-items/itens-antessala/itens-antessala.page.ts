import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-itens-antessala',
  templateUrl: './itens-antessala.page.html',
  styleUrls: ['./itens-antessala.page.scss'],
})
export class ItensAntessalaPage {
  roomItems = ['Itens Antessala - Chão', 'Itens Antessala - Parede', 'Itens Antessala - Teto'];
  chipItemsChao = ['Tapete', 'Sofá', 'Raque', 'Vasos', 'Mesa de Centro', 'Poltrona', 'Puff', 'Banco', 'Cadeiras', 'Mesa Lateral', 'Aparador', 'Estante'];
  chipItemsParede = ['Estantes de parede', 'Prateleiras', 'Nichos', 'Suporte para TV', 'Espelhos', 'Cabideiros', 'Quadros', 'Relógios', 'Vasos de planta', 'Painéis decorativos'];
  chipItemsTeto = ['Lustres', 'Plafons', 'Arandelas', 'Ventiladores de teto', 'Cortinas', 'Persianas', 'Painéis acústicos', 'Sistema de som', 'Luminárias pendentes'];

  expandedIndex: number | null = null;
  
  selectedChips: { chao: string[], parede: string[], teto: string[] } = {
    chao: [],
    parede: [],
    teto: []
  };

  constructor(private navCtrl: NavController) {}

  handlePress(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  handleChipPress(chip: string, type: keyof typeof this.selectedChips) {
    const selected = this.selectedChips[type];
    if (selected.includes(chip)) {
      this.selectedChips[type] = selected.filter((item: string) => item !== chip);
    } else {
      this.selectedChips[type].push(chip);
    }
  }

  getChips(item: string): string[] {
    switch (item) {
      case 'Itens Antessala - Chão':
        return this.chipItemsChao;
      case 'Itens Antessala - Parede':
        return this.chipItemsParede;
      case 'Itens Antessala - Teto':
        return this.chipItemsTeto;
      default:
        return [];
    }
  }

  getChipType(item: string): keyof typeof this.selectedChips {
    switch (item) {
      case 'Itens Antessala - Chão':
        return 'chao';
      case 'Itens Antessala - Parede':
        return 'parede';
      case 'Itens Antessala - Teto':
        return 'teto';
      default:
        throw new Error('Tipo inválido');
    }
  }

  isSelected(chip: string, type: keyof typeof this.selectedChips): boolean {
    return this.selectedChips[type].includes(chip);
  }

  goToNextPage() {
    this.navCtrl.navigateForward('/dados-mobilia');
  }
}
