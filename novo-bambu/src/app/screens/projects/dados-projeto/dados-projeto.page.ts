import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dados-projeto',
  templateUrl: './dados-projeto.page.html',
  styleUrls: ['./dados-projeto.page.scss'],
})
export class DadosProjetoPage {
  projetoData = {
    titulo: '',
    enderecoProjeto: '',
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

  constructor(private navCtrl: NavController) {}

  // Função chamada quando o valor do input muda
  onInputChange(event: any) {
    const inputValue = event.target.value;

    // Se o valor for vazio, não faz nada
    if (inputValue === '') {
      this.projetoData.orcamento = '';
      return;
    }

    // Remove caracteres não numéricos e armazena o valor
    const numericValue = inputValue.replace(/\D/g, '');
    this.projetoData.orcamento = numericValue; // Armazena apenas os números
  }

  // Função que formata o orçamento ao sair do campo (blur)
  formatCurrency() {
    if (!this.projetoData.orcamento) {
      this.projetoData.orcamento = '';
      return;
    }

    // Converte o valor para o formato R$
    this.projetoData.orcamento = this.formatToCurrency(this.projetoData.orcamento);
  }

  // Método para formatar o número como moeda
  private formatToCurrency(value: string): string {
    if (!value) return '';

    // Converte o valor para inteiro antes da formatação
    const numberValue = parseInt(value, 10);
    
    const formattedValue = numberValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formattedValue;
  }

  // Função que salva os dados e navega para a próxima página
  saveAndContinue() {
    console.log('Dados do Projeto Salvos:', this.projetoData);
    this.navCtrl.navigateForward('/dados-ambiente');
  }
}
