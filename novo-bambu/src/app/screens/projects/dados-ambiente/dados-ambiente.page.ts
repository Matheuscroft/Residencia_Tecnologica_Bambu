import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataContextService } from '../../../services/data-context.service';

@Component({
  selector: 'app-dados-ambiente',
  templateUrl: './dados-ambiente.page.html',
  styleUrls: ['./dados-ambiente.page.scss'],
})
export class DadosAmbientePage {
  checkboxes: any;
  projetoData: any;

  constructor(private dataContext: DataContextService, private navCtrl: NavController) {
    this.checkboxes = this.dataContext.checkboxes;
    this.projetoData = this.dataContext.projetoData;
  }

  setCheckbox(key: string, event: any) {
    this.checkboxes[key] = event.detail.checked;
  }

  saveState() {
    this.dataContext.setProjetoData({
      ...this.projetoData,
      ...this.checkboxes
    });
    this.navCtrl.navigateForward('/dados-mobilia');
  }
}

