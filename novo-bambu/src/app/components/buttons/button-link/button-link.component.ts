import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ButtonLink',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
})

export class ButtonLinkComponent {
  @Input() href!: string;
  @Input() text!: string;

  constructor(private navCtrl: NavController) {}

  navigateTo() {
    this.navCtrl.navigateForward(this.href);
  }
}
