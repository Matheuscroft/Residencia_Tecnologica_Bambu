import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ButtonLink',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
})
export class ButtonLinkComponent {
  @Input() href: string = '';
  @Input() text: string = '';
  @Output() clickEvent = new EventEmitter<void>();

  constructor(private navCtrl: NavController) {}

  /*navigateTo() {
    if (this.href) {
      this.navCtrl.navigateForward(this.href);
    } else {
      console.error('Navegação falhou: O valor de "href" está indefinido ou é inválido.');
    }
  }*/

  handleClick() {
    if (this.href) {
      this.navCtrl.navigateForward(this.href); 
    } else {
      this.clickEvent.emit(); 
    }
  }
}
