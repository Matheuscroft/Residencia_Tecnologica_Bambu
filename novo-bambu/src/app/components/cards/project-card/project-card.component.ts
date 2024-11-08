import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() projectTitle: string = 'Projeto Exemplo';
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  @Input() progress: number = 0;
  @Input() modoExclusao: boolean = false;
  @Input() selecionado: boolean = false;
  @Output() selecionadoChange = new EventEmitter<boolean>();
  @Output() deleteProject = new EventEmitter<void>();
  @Input() href: string = '';

  constructor(private navCtrl: NavController) {}

  getProgresso(): number {
    return this.progress;
  }

  abrirInfo(event: Event) {
    event.stopPropagation();
    console.log('Botão de informações clicado');
  }

  irParaDetalhes() {
    if (!this.modoExclusao) {
      console.log('Redirecionando para a página de detalhes');
    }
  }

  toggleSelecionado() {
    this.selecionado = !this.selecionado;
    this.selecionadoChange.emit(this.selecionado);
  }

  emitirDelete(event: Event) {
    event.stopPropagation(); // Evita propagação do clique no card
    this.deleteProject.emit(); // Emite o evento de exclusão
  }
  

  navigateTo() {
    if (this.href) {
      this.navCtrl.navigateForward(this.href);
    } else {
      console.error('Navegação falhou: O valor de "href" está indefinido ou é inválido.');
    }
  }

}