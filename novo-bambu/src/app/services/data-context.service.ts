import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataContextService {
  checkboxes: any = {
    restricoes: false,
    sustentabilidade: false,
    acessibilidade: false,
    ventilacaoNatural: false,
    isolamentoAcustico: false,
    eficienciaEnergetica: false,
    iluminacaoNatural: false,
    ventilacao: false,
  };

  projetoData: any = {};
  clienteData: any = {
    nome: '',
    endereco: '',
    telefone: '',
    email: ''
  };

  setProjetoData(projetoData: any) {
    this.projetoData = { ...this.projetoData, ...projetoData };
  }

  getProjetoData() {
    return this.projetoData;
  }

  setClienteData(clienteData: any) {
    this.clienteData = { ...this.clienteData, ...clienteData };
  }

  getClienteData() {
    return this.clienteData;
  }
}
