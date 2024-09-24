import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ButtonInfo',
  templateUrl: './button-info.component.html',
  styleUrls: ['./button-info.component.scss'],
})

export class ButtonInfoComponent {
  @Input() href!: string;
  @Input() imgSource!: string;

  constructor(private navCtrl: NavController) {}

  navigateTo() {
    this.navCtrl.navigateForward(this.href);
  }
}
