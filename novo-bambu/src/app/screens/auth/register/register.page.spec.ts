import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  
  fullName: string = '';
  phone: string = '';
  company: string = '';
  cpf: string = '';
  cauregistro: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  notificationPreferences: string = '';

  constructor(private navCtrl: NavController) {}

  handleRegister() {
   
    if (!this.fullName || !this.phone || !this.cpf || !this.cauregistro || !this.email || !this.password || !this.confirmPassword) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    
    const registerData = {
      fullName: this.fullName,
      phone: this.phone,
      company: this.company,
      cpf: this.cpf,
      cauregistro: this.cauregistro,
      email: this.email,
      password: this.password,
      notificationPreferences: this.notificationPreferences
    };

    console.log('Dados de registro do usuário: ', registerData);
  }
}