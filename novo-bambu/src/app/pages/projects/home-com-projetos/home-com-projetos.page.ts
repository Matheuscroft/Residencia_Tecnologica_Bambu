import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-com-projetos',
  templateUrl: './home-com-projetos.page.html',
  styleUrls: ['./home-com-projetos.page.scss'],
})
export class HomeComProjetosPage {
  projetosSelecionados: Set<number> = new Set();

  // Definição dos projetos
  projects = [
    { title: 'Casa de Praia', startDate: new Date('2023-06-20'), endDate: new Date('2030-02-01'), progress: 3, endereco: 'Av. Estônia Carneiro, 171, PE - Carpina - Centro', tipoObra: 'Residencial - Casa na árvore', valor: 192812.00 },
    { title: 'Projeto Imbiribeira', startDate: new Date('2022-06-20'), endDate: new Date('2024-06-01'), progress: 20, endereco: 'Rua Imbiribeira, Recife, PE', tipoObra: 'Comercial', valor: 350000.00 },
    { title: 'Ilha do Leite', startDate: new Date('2022-09-01'), endDate: new Date('2024-05-01'), progress: 100, endereco: 'Av. Ilheus, Recife, PE', tipoObra: 'Hospitalar', valor: 500000.00 }
  ];

  constructor(private router: Router) {}

  // Método para abrir a tela de detalhes do projeto
  abrirDetalhesProjeto(projeto: any) {
    this.router.navigate(['/tela-sobre-projetos'], {
      state: { projeto }
    });
  }

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

  deleteProject(index: number) {
    if (index >= 0 && index < this.projects.length) {
      this.projects.splice(index, 1);
    }
  }

  addProject() {
    this.projects.push({
      title: 'Novo Projeto',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-01'),
      progress: 0,
      endereco: 'Endereço Exemplo',
      tipoObra: 'Residencial',
      valor: 0.00
    });
    console.log('Projeto adicionado!');
  }
}