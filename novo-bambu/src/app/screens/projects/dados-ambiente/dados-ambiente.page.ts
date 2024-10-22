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
  
    if (quantidadeNumerica > 0) {
      // Adiciona ou atualiza o ambiente se a quantidade for maior que zero
      const ambienteExistente = this.ambientesSelecionados.find(a => a.nome === nome);
  
      if (ambienteExistente) {
        ambienteExistente.quantidade = quantidadeNumerica;
      } else {
        this.ambientesSelecionados.push({ nome, quantidade: quantidadeNumerica });
      }
    } else {
      // Remove o ambiente se a quantidade for zero
      this.ambientesSelecionados = this.ambientesSelecionados.filter(a => a.nome !== nome);
    }
  
    // Atualiza o localStorage sempre que a quantidade muda
    this.atualizarLocalStorage();
  }
  
  // Função para atualizar o localStorage
  atualizarLocalStorage() {
    // Filtra os ambientes para remover aqueles com quantidade zero
    const ambientesValidados = this.ambientesSelecionados.filter(ambiente => ambiente.quantidade > 0);
  
    if (ambientesValidados.length > 0) {
      // Salva no localStorage apenas os ambientes válidos
      localStorage.setItem('ambientesSelecionados', JSON.stringify(ambientesValidados));
    } else {
      // Remove os dados do localStorage se não houver ambientes válidos
      localStorage.removeItem('ambientesSelecionados');
    }
  
    console.log('Dados atualizados no localStorage:', ambientesValidados); // Debug
  }
  

  // Função para seleção do botão "Outro"
  // Função para seleção do botão "Outro"
// Função para seleção do botão "Outro"
selecionarOutro() {
  this.isOutroSelecionado = !this.isOutroSelecionado;

  if (!this.isOutroSelecionado) {
    // Limpa os campos e remove o ambiente se o botão "Outro" for desmarcado
    this.removerOutro();
  }
}

// Atualizar ambiente "Outro"
atualizarOutro() {
  const nome = this.nomeOutro.trim();

  if (nome && this.quantidadeOutro > 0) {
    // Atualiza ou adiciona o ambiente "Outro" usando a mesma lógica do AmbienteButton
    this.atualizarQuantidade(nome, this.quantidadeOutro);
  } else {
    // Remove o ambiente "Outro" se a quantidade for zero ou o nome estiver vazio
    this.removerOutro();
  }
}

// Função para remover o ambiente "Outro" do array e do localStorage
removerOutro() {
  this.ambientesSelecionados = this.ambientesSelecionados.filter(a => a.nome !== this.nomeOutro);

  // Atualiza o localStorage
  this.atualizarLocalStorage();
}



  // Salvar os dados ao clicar em "Salvar e continuar"
  salvarAmbientes() {
    // Filtra os ambientes para remover aqueles com quantidade zero
    const ambientesValidados = this.ambientesSelecionados.filter(ambiente => ambiente.quantidade > 0);
  
    if (ambientesValidados.length > 0) {
      // Converta o array filtrado `ambientesValidados` para JSON e salve no localStorage
      localStorage.setItem('ambientesSelecionados', JSON.stringify(ambientesValidados));
      console.log('Dados salvos no localStorage:', ambientesValidados); // Debug
    } else {
      console.error('Nenhum ambiente válido para salvar.');
    }
  }
  
  
}
