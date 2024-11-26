import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoServiceService } from 'src/app/services/projeto-service.service';

@Component({
  selector: 'app-projetos-home',
  templateUrl: './projetos-home.page.html',
  styleUrls: ['./projetos-home.page.scss'],
})
export class ProjetosHomePage implements OnInit {

  projetoList: any = null;
  projetosSelecionados: Set<number> = new Set();

  constructor(private projetoService: ProjetoServiceService, private router: Router) { }

  ngOnInit() {
/*
    console.log("iniciei")
    this.projetoService.getProjetoList().subscribe((data: any) => {
      console.log(data)
      this.projetoList = (data || []).reverse();
    })
*/
  }

  ionViewWillEnter() {
    // Carregar os dados sempre que a página for exibida
    console.log('Página de projetos em foco');
    this.carregarProjetos();
  }

  carregarProjetos() {
    this.projetoService.getProjetoList().subscribe({
      next: (data: any) => {
        console.log('Dados carregados:', data);
        this.projetoList = (data || []).reverse();
      },
      error: (err) => {
        console.error('Erro ao carregar projetos:', err);
      },
    });
  }


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

  /*deleteProject(index: number) {
    if (index >= 0 && index < this.projetoList.length) {
      this.projetoList.splice(index, 1);
    }
  }*/
    deleteProject(index: number) {

      console.log("deleteProject")
      console.log("index")
      console.log(index)
      const projetoId = this.projetoList[index]?.id; 
      if (projetoId) {
        this.projetoService.deleteProjeto(projetoId).subscribe(
          (response) => {
            console.log('Projeto removido com sucesso:', response);
            this.projetoList.splice(index, 1);
          },
          (error) => {
            console.error('Erro ao remover projeto:', error);
          }
        );
      }
    }



  addProject() {
    this.projetoList.push({
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
