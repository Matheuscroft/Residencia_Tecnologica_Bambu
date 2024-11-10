import { Component, OnInit } from '@angular/core';

interface Ambiente {
  nome: string;
  quantidade: number;
  tamanho: string; // Define tamanho como string obrigatória
}

@Component({
  selector: 'app-dados-ambientes-tamanho',
  templateUrl: './dados-ambientes-tamanho.page.html',
  styleUrls: ['./dados-ambientes-tamanho.page.scss'],
})
export class DadosAmbientesTamanhoPage implements OnInit {
  ambientes: Ambiente[] = [];

  ngOnInit() {
    const dados = localStorage.getItem('ambientesSelecionados');
    if (dados) {
      const ambientesSelecionados = JSON.parse(dados);
      this.gerarListaDeAmbientes(ambientesSelecionados);
      console.log('Dados carregados do localStorage:', ambientesSelecionados);
    } else {
      console.log('Nenhum dado encontrado no localStorage.');
    }
  }
  

  gerarListaDeAmbientes(ambientesSelecionados: Ambiente[]) {
    ambientesSelecionados.forEach(ambiente => {
      if (ambiente.quantidade > 1) {
        for (let i = 1; i <= ambiente.quantidade; i++) {
          this.ambientes.push({ nome: `${ambiente.nome} ${i}`, quantidade: 1, tamanho: '' });
        }
      } else {
        this.ambientes.push({ nome: ambiente.nome, quantidade: 1, tamanho: '' });
      }
    });
  }
  

  atualizarTamanho(index: number, novoTamanho: string) {
    this.ambientes[index].tamanho = novoTamanho;
    this.atualizarLocalStorage();
  }

  removerAmbiente(index: number) {
    this.ambientes.splice(index, 1);
    this.atualizarLocalStorage();
  }

  atualizarLocalStorage() {
    const dadosAtualizados = this.ambientes.map(a => ({
      nome: a.nome.replace(/\d+$/, '').trim(),
      quantidade: a.quantidade,
      tamanho: a.tamanho,
    }));
    localStorage.setItem('ambientesSelecionados', JSON.stringify(dadosAtualizados));
  }

  salvarTamanhos() {
    this.atualizarLocalStorage();
    console.log('Ambientes com tamanhos:', this.ambientes);
  }
}
