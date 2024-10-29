import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataContextService } from '../../../services/data-context.service';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.page.html',
  styleUrls: ['./dados-cliente.page.scss'],
})
export class DadosClientePage {
  clienteData: any;

  constructor(private dataContext: DataContextService, private navCtrl: NavController) {
    this.clienteData = this.dataContext.clienteData || {
      nome: '',
      endereco: '',
      telefone: '',
      email: '',
      tipoCliente: 'pessoaFisica' 
    };
  }

  /**
   * Atualiza os dados do cliente no contexto.
    @param key 
    @param value .
   */
  setClienteData(key: string, value: any) {
    this.clienteData[key] = value;
    this.dataContext.setClienteData(this.clienteData);
  }

  /**
   * Manipula a mudança de tipo de cliente a partir do <select>.
   * @param event O evento de mudança do <select>.
   */
  onTipoClienteChange(event: any) {
    const tipoClienteSelecionado = event.target.value;
    this.setClienteData('tipoCliente', tipoClienteSelecionado);
  }

  /**
   * Navega para a próxima página ao salvar os dados.
   */
  saveAndContinue() {
    this.navCtrl.navigateForward('/dados-projeto');
  }
}