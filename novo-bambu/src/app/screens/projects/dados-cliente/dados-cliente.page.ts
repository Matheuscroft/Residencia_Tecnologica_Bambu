import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.page.html',
  styleUrls: ['./dados-cliente.page.scss'],
})
export class DadosClientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/*import { Component } from '@angular/core';
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
      email: ''
    };
  }

  setClienteData(key: string, value: any) {
    this.clienteData[key] = value;
    this.dataContext.setClienteData(this.clienteData);
  }

  saveAndContinue() {
    this.navCtrl.navigateForward('/dados-projeto');
  }
}
*/