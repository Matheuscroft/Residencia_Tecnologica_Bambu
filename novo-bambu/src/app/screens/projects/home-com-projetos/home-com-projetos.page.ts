import { Component } from '@angular/core';

@Component({
  selector: 'app-home-com-projetos',
  templateUrl: './home-com-projetos.page.html',
  styleUrls: ['./home-com-projetos.page.scss'],
})
export class HomeComProjetosPage {
  project = {
    title: 'Casa de Praia',
    startDate: '20/06/2023',
    endDate: '02/2030',
    progress: 3,
  };
}
