import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    console.log("LOGIN CARAI")
    this.router.navigate(['/projetos-home']);
    
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToEsqueciSenha() {
    this.router.navigate(['/esqueci-senha']);
  }

}

