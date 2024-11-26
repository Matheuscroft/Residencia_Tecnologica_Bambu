import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AmbienteService {
  private dadosAmbientes: any;

  setDadosAmbientes(dados: any) {
    this.dadosAmbientes = dados;
  }

  getDadosAmbientes() {
    return this.dadosAmbientes;
  }
}
