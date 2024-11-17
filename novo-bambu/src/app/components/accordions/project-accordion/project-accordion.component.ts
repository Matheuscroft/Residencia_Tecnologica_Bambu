import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ProjectAccordion',
  templateUrl: './project-accordion.component.html',
  styleUrls: ['./project-accordion.component.scss'],
})
export class ProjectAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() nomeEtapa: string = '';
  cardExpandido = false;
  editandoTitulo = false;
  titulo = 'Reunião 1';
  reunioes = [
    { nome: 'Reunião 1', data: 'Jun 10, 2024', hora: '9:41 AM' },
    { nome: 'Reunião 2', data: 'Jun 15, 2024', hora: '10:00 AM' },
  ];

  expandirCard(index: number) {
    this.cardExpandido = true;
    this.titulo = this.reunioes[index].nome;
  }

  voltar() {
    this.cardExpandido = false;
  }

  salvarTitulo() {
    this.editandoTitulo = false;
    console.log('Título salvo:', this.titulo);
  }

  adicionarReuniao() {
    const novoTitulo = `Reunião ${this.reunioes.length + 1}`;
    const novaReuniao = {
      nome: novoTitulo,
      data: 'Jul 01, 2024',
      hora: '9:00 AM'
    };
    this.reunioes.push(novaReuniao);
  }
  


}
