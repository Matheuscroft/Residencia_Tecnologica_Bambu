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
  ambientes: Ambiente[] = [];

  constructor() {}

  // Adiciona um novo par de campos de Nome e Quantidade
  adicionarAmbiente() {
    this.ambientes.push({ nome: '', quantidade: 0 });
  }

  // Atualiza o nome de um ambiente específico
  atualizarNome(nome: string, index: number) {
    this.ambientes[index].nome = nome;
  }

  // Atualiza a quantidade de um ambiente específico
  atualizarQuantidade(quantidade: number, index: number) {
    this.ambientes[index].quantidade = quantidade;
  }

  // Salvar os dados ao clicar em "Salvar e continuar"
  salvarAmbientes() {
    const ambientesValidados = this.ambientes.filter(a => a.nome && a.quantidade > 0);
    
    if (ambientesValidados.length > 0) {
      localStorage.setItem('ambientesSelecionados', JSON.stringify(ambientesValidados));
      console.log('Dados salvos no localStorage:', ambientesValidados);
    } else {
      console.error('Nenhum ambiente válido para salvar.');
    }
  }
  

  atualizarLocalStorage() {
    localStorage.setItem('ambientesSelecionados', JSON.stringify(this.ambientes));
  }

  removerAmbiente(index: number) {
    // Remove o ambiente do array
    this.ambientes.splice(index, 1);
  
    // Atualiza o localStorage com o novo array
    this.atualizarLocalStorage();
  }
  
}
