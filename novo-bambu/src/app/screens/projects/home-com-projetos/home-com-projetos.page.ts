import { Component } from '@angular/core';

@Component({
  selector: 'app-home-com-projetos',
  templateUrl: './home-com-projetos.page.html',
  styleUrls: ['./home-com-projetos.page.scss'],
})
export class HomeComProjetosPage {
  projetosSelecionados: Set<number> = new Set();
  
  projects = [
    { title: 'Casa de Praia', startDate: new Date('2023-06-20'), endDate: new Date('2030-02-01'), progress: 3 },
    { title: 'Projeto Imbiribeira', startDate: new Date('2022-06-20'), endDate: new Date('2024-06-01'), progress: 20 },
    { title: 'Ilha do Leite', startDate: new Date('2022-09-01'), endDate: new Date('2024-05-01'), progress: 100 }
  ];

  toggleProjetoSelecionado(index: number, selecionado: boolean) {
    if (selecionado) {
      this.projetosSelecionados.add(index);
    } else {
      this.projetosSelecionados.delete(index);
    }
  }

  excluirProjetos() {
    this.projects = this.projects.filter((_, index) => !this.projetosSelecionados.has(index));
    this.projetosSelecionados.clear();
  }

  // Adicionando o método deleteProject para excluir um único projeto
  deleteProject(index: number) {
    if (index >= 0 && index < this.projects.length) {
      this.projects.splice(index, 1); // Remove o projeto pelo índice
    }
  }

  addProject() {
    this.projects.push({
      title: 'Novo Projeto',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-01'),
      progress: 0
    });
    console.log('Projeto adicionado!');
  }
}