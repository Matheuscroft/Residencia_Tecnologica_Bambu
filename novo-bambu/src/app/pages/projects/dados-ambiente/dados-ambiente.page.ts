import { Component } from '@angular/core';
import { AmbienteService } from 'src/app/services/shared/ambiente.service';
import { ProjetoidService } from 'src/app/services/shared/projetoid.service';

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

  projetoId: string | null = null;

  constructor(private ambienteService: AmbienteService, private projetoIdService: ProjetoidService) { }

  ngOnInit() {
    //this.projetoId = localStorage.getItem('projetoId');
    this.projetoId = this.projetoIdService.getProjetoId();
    console.log("projetoId recebido do serviço compartilhado:", this.projetoId);
    if (!this.projetoId) {
      //console.error('Nenhum ID de projeto encontrado.');
    }
  }

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
    console.log("atualizarQuantidade")
    console.log("this.ambientes")
    console.log(this.ambientes)
  }

  salvarAmbientes() {
    const ambientesValidados = this.ambientes.filter(a => a.nome && a.quantidade > 0);

    const ambientesFinais = ambientesValidados
    .map((ambiente: any) => {
      return Array.from({ length: ambiente.quantidade }, (_, index) => ({
        nome: `${ambiente.nome} ${index + 1}`,
        tamanho: '' // Mantém vazio
      }));
    })
    .reduce((acc, curr) => acc.concat(curr), []);

    console.log("ambientesFinais")
    console.log(ambientesFinais)

    if (ambientesFinais.length > 0) {
      /*localStorage.setItem('ambientesSelecionados', JSON.stringify(ambientesFinais));
      console.log('Dados salvos no localStorage:', ambientesFinais);*/

      const dadosAmbientes = { projetoId: this.projetoId, ambientes: ambientesFinais };
      console.log('Dados dos ambientes a serem enviados:');
      console.log(dadosAmbientes)

      this.ambienteService.setDadosAmbientes(dadosAmbientes);


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
