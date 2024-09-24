import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  handleRegister() {
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    this.router.navigate(['/login']);
  }
}



