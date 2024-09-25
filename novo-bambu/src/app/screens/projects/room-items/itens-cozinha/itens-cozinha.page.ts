import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-itens-cozinha',
  templateUrl: './itens-cozinha.page.html',
  styleUrls: ['./itens-cozinha.page.scss'],
})
export class ItensCozinhaPage {
  expandedIndex: number | null = null;
  selectedChips: { [key: string]: string[] } = { chao: [], parede: [], teto: [] };

  roomItems = [
    'Itens Cozinha - Chão',
    'Itens Cozinha - Parede',
    'Itens Cozinha - Teto',
  ];

  chipItemsChao = [
    'Armários de chão', 'Ilha de cozinha', 'Mesas', 'Cadeiras', 'Bancos', 'Tapetes', 
    'Eletrodomésticos', 'Lixeiras', 'Carrinhos de cozinha', 'Prateleiras de chão', 'Gaveteiros',
  ];

  chipItemsParede = [
    'Prateleiras', 'Armários aéreos', 'Ganchos', 'Suportes para utensílios', 'Quadros', 
    'Relógios', 'Porta temperos', 'Porta facas', 'Painéis decorativos', 'Plantas pendentes',
  ];

  chipItemsTeto = [
    'Lustres', 'Plafons', 'Arandelas', 'Exaustores', 'Ventiladores de teto', 
    'Cortinas', 'Persianas', 'Painéis acústicos', 'Luminárias suspensas', 'Sistema de som',
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
      case 'Itens Cozinha - Chão':
        return this.chipItemsChao;
      case 'Itens Cozinha - Parede':
        return this.chipItemsParede;
      case 'Itens Cozinha - Teto':
        return this.chipItemsTeto;
      default:
        return [];
    }
  }

  getTypeForIndex(index: number): string {
    switch(this.roomItems[index]) {
      case 'Itens Cozinha - Chão':
        return 'chao';
      case 'Itens Cozinha - Parede':
        return 'parede';
      case 'Itens Cozinha - Teto':
        return 'teto';
      default:
        return '';
    }
  }

  goToNextPage() {
    this.navCtrl.navigateForward('/dados-mobilia');
  }
}
