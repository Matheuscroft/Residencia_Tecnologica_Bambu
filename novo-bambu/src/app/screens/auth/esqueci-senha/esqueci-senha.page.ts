import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})


export class EsqueciSenhaPage {

  constructor(private router: Router) {}

  navigateToCodeScreen() {
    this.router.navigate(['/tela-codigo']);
  }
}




