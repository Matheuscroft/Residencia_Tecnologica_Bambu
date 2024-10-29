import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-sobre-projetos',
  templateUrl: './tela-sobre-projetos.page.html',
  styleUrls: ['./tela-sobre-projetos.page.scss'],
})
export class TelaSobreProjetosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedSegment: string = 'etapas';

  onSegmentChange(segment: string) {
    this.selectedSegment = segment;
  }

}
