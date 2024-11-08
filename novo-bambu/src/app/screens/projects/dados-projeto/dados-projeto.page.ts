import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SelectCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-dados-projeto',
  templateUrl: './dados-projeto.page.html',
  styleUrls: ['./dados-projeto.page.scss'],
})
export class DadosProjetoPage {

  projetoData = {
    titulo: '',
    enderecoProjeto: '',
    tipoObra: '',
    detalhes: '',
    orcamento: '',
    startDate: '',
    endDate: '',
    percentStage1: '',
    percentStage2: '',
    percentStage3: '',
    percentStage4: '',
    percentStage5: ''
  };

  obraOptions = [
    { value: 'Residencial', label: 'Residencial' },
    { value: 'Corporativo', label: 'Corporativo' }
  ];

  onValueChange(selectedValue: string) {
    this.projetoData.tipoObra = selectedValue; // Recebe o valor simples
  }
  


  constructor(private navCtrl: NavController) {}

  
  onInputChange(event: any) {
    const inputValue = event.target.value;

    if (!inputValue) {
      this.projetoData.orcamento = '';
      return;
    }

    
    const numericValue = inputValue.replace(/\D/g, '');
    this.projetoData.orcamento = numericValue;
  }

  formatCurrency() {
    if (!this.projetoData.orcamento) {
      this.projetoData.orcamento = '';
      return;
    }

   
    this.projetoData.orcamento = this.formatToCurrency(this.projetoData.orcamento);
  }

 
  private formatToCurrency(value: string): string {
    if (!value) return '';


    const numberValue = parseInt(value, 10);
    
    const formattedValue = numberValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formattedValue;
  }

  saveAndContinue() {
    console.log('Dados do Projeto Salvos:', this.projetoData);
    this.navCtrl.navigateForward('/dados-ambiente');
  }
}

