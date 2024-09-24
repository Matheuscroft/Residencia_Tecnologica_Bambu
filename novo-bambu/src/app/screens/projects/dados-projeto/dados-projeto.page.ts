import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dados-projeto',
  templateUrl: './dados-projeto.page.html',
  styleUrls: ['./dados-projeto.page.scss'],
})
export class DadosProjetoPage {
  projetoData = {
    titulo: '',
    enderecoProjeto: '',
    tipoConstrucao: '',
    tamanhoConstrucao: '',
    orcamento: '',
  };

  constructor(private navCtrl: NavController) {}

  saveAndContinue() {
    console.log('Projeto Salvo:', this.projetoData);
    this.navCtrl.navigateForward('/dados-ambiente');
  }
}
