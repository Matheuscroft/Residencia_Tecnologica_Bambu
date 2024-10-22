import { Component, OnInit } from '@angular/core';

interface Ambiente {
  nome: string;
  quantidade: number;
  tamanho?: string; // Armazena o tamanho em m² (string para formatar com "m²")
}

@Component({
  selector: 'app-dados-ambientes-tamanho',
  templateUrl: './dados-ambientes-tamanho.page.html',
  styleUrls: ['./dados-ambientes-tamanho.page.scss'],
})
export class DadosAmbientesTamanhoPage implements OnInit {
  ambientes: Ambiente[] = []; // Lista de cômodos recebidos da tela anterior

  ngOnInit() {
    // Recupera os dados da tela anterior do localStorage
    const dados = localStorage.getItem('ambientesSelecionados');
    
    if (dados) {
      const ambientesSelecionados = JSON.parse(dados);
      console.log('Dados recuperados do localStorage:', ambientesSelecionados); // Verifique os dados carregados
  
      // Gera a lista de ambientes com a numeração correta
      this.gerarListaDeAmbientes(ambientesSelecionados);
    } else {
      console.log('Nenhum dado encontrado no localStorage.');
    }
  }
    


  // Gera a lista de ambientes com numeração se necessário
  gerarListaDeAmbientes(ambientesSelecionados: Ambiente[]) {
    ambientesSelecionados.forEach(ambiente => {
      if (ambiente.quantidade > 1) {
        for (let i = 1; i <= ambiente.quantidade; i++) {
          this.ambientes.push({ nome: `${ambiente.nome} ${i}`, quantidade: 1 });
        }
      } else {
        this.ambientes.push({ nome: ambiente.nome, quantidade: 1 });
      }
    });
    console.log('Lista de ambientes gerada:', this.ambientes); // Verifique a lista gerada
  }
  

  // Atualiza o tamanho do ambiente e formata com "m²"
  atualizarTamanho(ambiente: Ambiente, tamanho: number) {
    ambiente.tamanho = `${tamanho}m²`;
  }

  // Salvar os dados ao clicar em "Salvar e continuar"
  salvarTamanhos() {
    // Salva os dados atualizados no localStorage ou outra fonte de dados
    console.log('Ambientes com tamanhos:', this.ambientes);
  }

  // Retorna o nome correto do ambiente (sem número para quantidade igual a 1)
  getNomeAmbiente(nome: string, index: number): string {
    const semNumero = nome.replace(/\d+$/, '').trim(); // Remove o número final se houver
    return this.ambientes.filter(a => a.nome.startsWith(semNumero)).length > 1 ? nome : semNumero;
  }
}
