import { Component } from '@angular/core';

interface Ambiente {
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-dados-ambiente',
  templateUrl: './dados-ambiente.page.html',
  styleUrls: ['./dados-ambiente.page.scss'],
})
export class DadosAmbientePage {
  ambientesSelecionados: Ambiente[] = [];

  // Variáveis para o botão "Outro"
  isOutroSelecionado: boolean = false;
  nomeOutro: string = '';
  quantidadeOutro: number = 0;

  // Função para atualizar a quantidade dos ambientes fixos
  atualizarQuantidade(nome: string, quantidade: any) {
    // Converte o valor para número
    const quantidadeNumerica = parseInt(quantidade, 10);
  
    if (!isNaN(quantidadeNumerica)) {
      const ambienteExistente = this.ambientesSelecionados.find(a => a.nome === nome);
  
      if (ambienteExistente) {
        ambienteExistente.quantidade = quantidadeNumerica;
      } else {
        this.ambientesSelecionados.push({ nome, quantidade: quantidadeNumerica });
      }
    }
  
    // Log para verificar se está salvando corretamente
    console.log('Ambientes selecionados:', this.ambientesSelecionados);
  }
  
  

  // Função para seleção do botão "Outro"
  selecionarOutro() {
    this.isOutroSelecionado = !this.isOutroSelecionado;
    if (!this.isOutroSelecionado) {
      this.nomeOutro = '';
      this.quantidadeOutro = 0;
    }
  }

  // Atualizar ambiente "Outro"
  atualizarOutro() {
    const nome = this.nomeOutro.trim();
    if (nome) {
      this.atualizarQuantidade(nome, this.quantidadeOutro);
    }
  }

  // Salvar os dados ao clicar em "Salvar e continuar"
  salvarAmbientes() {
    // Você pode salvar em localStorage ou enviar os dados para o backend
    console.log('Ambientes selecionados:', this.ambientesSelecionados);
  }
}
