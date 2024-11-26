import { Component, Input, OnInit } from '@angular/core';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { ProjetoServiceService } from 'src/app/services/projeto-service.service';

@Component({
  selector: 'ProjectStatusForm',
  templateUrl: './project-status-form.component.html',
  styleUrls: ['./project-status-form.component.scss'],
})
export class ProjectStatusFormComponent implements OnInit {

  @Input() projeto: any;

  constructor(private projetoService: ProjetoServiceService) { }

  ngOnInit() {
    console.log('Projeto recebido no Status Form:', this.projeto);
  }

  onStatusChange(selectedValue: string) {
    this.projeto.statusProjeto = selectedValue;
    console.log('Status selecionado:', selectedValue);

    const updatedProjeto = { ...this.projeto, statusProjeto: selectedValue };
    console.log("updatedProjeto")
    console.log(updatedProjeto)
    this.projetoService.updateProjeto(this.projeto.id, updatedProjeto).subscribe({
      next: (response) => {
        console.log('Projeto atualizado com sucesso:', response);
      },
      error: (err) => {
        console.error('Erro ao atualizar o projeto:', err);
      }
    });
  }


}
