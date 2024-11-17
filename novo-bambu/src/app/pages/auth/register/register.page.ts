import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeuServicoService } from 'src/app/services/meu-servico.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fullName: string = '';
  phone: string = '';
  cpf: string = '';
  company: string = '';
  cauregistro: string = '';
  email: string = '';
  senhas = {
    password: '',
    confirmPassword: ''
  };
  notificationPreferences: string = '';
  arquitetoList: any = null;

  constructor(private router: Router, private meuServicoService: MeuServicoService) {}

  ngOnInit() {

    console.log("iniciei")
    this.meuServicoService.getArquitetoList().subscribe((data: any) => {
      console.log(data)
      this.arquitetoList = data;
    })

  }

  handleRegister() {
    console.log('Iniciando validação...');

    console.log("this.password");
    console.log(this.senhas.password);
    console.log("this.confirmPassword");
    console.log(this.senhas.confirmPassword);

    if (this.senhas.password !== this.senhas.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

   /* if (!this.isValidCPF(this.cpf)) {
      alert('CPF inválido');
      return;
    }*/

    /*if (!this.isValidPhone(this.phone)) {
      alert('Telefone inválido');
      return;
    }*/

      /*const arquitetoData = {
        nome: this.fullName,
        phone: this.phone,
        cpf: this.cpf,
        company: this.company,
        cadastro_cau: this.cauregistro,
        email: this.email,
        senha: this.senhas.password,
        notificationPreferences: this.notificationPreferences
      };*/

      const arquitetoData = {
        nome: this.fullName,
        cpf: this.cpf,
        cadastro_cau: this.cauregistro,
        email: this.email,
        senha: this.senhas.password
      };

      console.log('Validações concluídas com sucesso!');
      console.log(arquitetoData);
  
      // Envia os dados para o backend
      this.meuServicoService.registerArquiteto(arquitetoData).subscribe(
        (response) => {
          console.log('Arquiteto registrado com sucesso!', response);
          //this.router.navigate(['/login']); // Redireciona para a tela de login após o cadastro
        },
        (error) => {
          console.error('Erro ao registrar arquiteto:', error);
          alert('Erro ao registrar arquiteto');
        }
      );

    
    //this.router.navigate(['/login']);
  }

  
  isValidCPF(cpf: string): boolean {
    
    cpf = cpf.replace(/\D/g, '');

    
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      console.log('CPF inválido por comprimento ou sequência repetida');
      return false;
    }

    let sum = 0;
    let rest: number;

    
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;

    if (rest !== parseInt(cpf.substring(9, 10))) {
      console.log('Primeiro dígito verificador inválido');
      return false;
    }

    
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;

    if (rest !== parseInt(cpf.substring(10, 11))) {
      console.log('Segundo dígito verificador inválido');
      return false;
    }

    console.log('CPF é válido:', cpf);
    return true;
  }

  
  isValidPhone(phone: string): boolean {
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/; 
    const isValid = phonePattern.test(phone);
    console.log('Telefone válido:', isValid);
    return isValid;
  }
}
