import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SelectCustomEvent } from '@ionic/angular';
import { ProjetoServiceService } from 'src/app/services/projeto-service.service';

@Component({
  selector: 'app-dados-projeto',
  templateUrl: './dados-projeto.page.html',
  styleUrls: ['./dados-projeto.page.scss'],
})
export class DadosProjetoPage {

  projetoData = {
    nomeDoProjeto: '',
    enderecoProjeto: '',
    tipoObra: '',
    descricao: '',
    valorProjeto: 0,
    dataDeInicio: '',
    dataPrevistaFim: '',
    percentStage1: '',
    percentStage2: '',
    percentStage3: '',
    percentStage4: '',
    percentStage5: ''
  };

  obraOptions = [
    { value: 'Residencial', label: 'Residencial' },
    { value: 'Corporativo', label: 'Corporativo' }
  ];

  onValueChange(selectedValue: string) {
    this.projetoData.tipoObra = selectedValue;
  }



  constructor(private navCtrl: NavController, private projetoService: ProjetoServiceService) { }


  onDatetimeChange(event: any, field: 'dataDeInicio' | 'dataPrevistaFim') {
    const selectedDate = event.detail.value;
  
    const localDate = new Date(selectedDate);
  
    const timezoneOffsetMinutes = localDate.getTimezoneOffset();
  
    const timezoneOffsetHours = timezoneOffsetMinutes / 60;
  
    const timezoneOffsetFormatted = timezoneOffsetHours <= 0
      ? `+${String(Math.abs(timezoneOffsetHours)).padStart(2, '0')}:00`
      : `-${String(Math.abs(timezoneOffsetHours)).padStart(2, '0')}:00`;
  
    const formattedDate = `${localDate.getFullYear()}-${String(localDate.getMonth() + 1).padStart(2, '0')}-${String(localDate.getDate()).padStart(2, '0')}T${String(localDate.getHours()).padStart(2, '0')}:${String(localDate.getMinutes()).padStart(2, '0')}:${String(localDate.getSeconds()).padStart(2, '0')}.${String(localDate.getMilliseconds()).padStart(3, '0')}${timezoneOffsetFormatted}`;
  
    this.projetoData[field] = formattedDate;
    console.log(`Data atualizada: ${field} = ${formattedDate}`);
  }
  
  
  
  
  
  
  



  saveAndContinue() {
    console.log('Dados do Projeto Salvos:', this.projetoData);

    //const dataDeInicio = new Date(this.projetoData.dataDeInicio).toISOString();
    //const dataPrevistaFim = new Date(this.projetoData.dataPrevistaFim).toISOString();

    const projetoEnviado = {
      nomeDoProjeto: this.projetoData.nomeDoProjeto,
      descricao: this.projetoData.descricao,
      dataDeInicio: this.projetoData.dataDeInicio,
      dataPrevistaFim: this.projetoData.dataPrevistaFim,
      valorProjeto: this.projetoData.valorProjeto
    };

    console.log('Dados do Projeto Enviados:', projetoEnviado);

    this.projetoService.registerProjeto(projetoEnviado).subscribe({
      next: (response) => {
          console.log('Projeto salvo com sucesso!', response);
          this.navCtrl.navigateForward('/dados-ambiente');
      },
      error: (error) => {
        console.error('Erro ao salvar o projeto:', error);
        alert('Erro ao salvar o projeto');
      }
    });
    
    
  }




}

