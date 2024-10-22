import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ButtonLink',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
})
export class ButtonLinkComponent {
  @Input() href!: string;
  @Input() text!: string;

  constructor(private router: Router) {}

  navigateTo() {
    if (this.href && this.href.toString()) {
      this.router.navigate([this.href]);
    } else {
      console.error('Navegação falhou: O valor de "href" está indefinido ou é inválido.');
    }
  }
}
