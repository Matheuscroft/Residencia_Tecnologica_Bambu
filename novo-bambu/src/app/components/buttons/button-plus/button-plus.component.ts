import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ButtonPlus',
  templateUrl: './button-plus.component.html',
  styleUrls: ['./button-plus.component.scss'],
})
export class ButtonPlusComponent {
  @Input() href: string = '';
  @Input() imgSource: string = '';

  constructor(private router: Router) {}

  navigate() {
    //this.router.navigate([this.href]);
  }
}
