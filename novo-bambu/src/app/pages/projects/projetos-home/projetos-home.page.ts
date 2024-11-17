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

    console.log("iniciei")
    this.projetoService.getProjetoList().subscribe((data: any) => {
      console.log(data)
      this.projetoList = data;
    })

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

  deleteProject(index: number) {
    if (index >= 0 && index < this.projetoList.length) {
      this.projetoList.splice(index, 1);
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
