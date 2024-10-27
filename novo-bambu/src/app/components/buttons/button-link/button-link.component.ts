import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ButtonLink',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
})
export class ButtonLinkComponent {
  @Input() href: string = '';  // Defina um valor padrão para evitar problemas de navegação
  @Input() text: string = '';

  constructor(private navCtrl: NavController) {}

  navigateTo() {
    if (this.href) {
      this.navCtrl.navigateForward(this.href);
    } else {
      console.error('Navegação falhou: O valor de "href" está indefinido ou é inválido.');
    }
  }
}
