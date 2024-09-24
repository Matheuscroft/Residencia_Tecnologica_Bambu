import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-codigo',
  templateUrl: './tela-codigo.page.html',
  styleUrls: ['./tela-codigo.page.scss'],
})

export class TelaCodigoPage {

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}


