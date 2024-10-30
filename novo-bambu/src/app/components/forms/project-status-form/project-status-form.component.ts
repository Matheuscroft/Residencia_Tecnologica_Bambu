import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ProjectStatusForm',
  templateUrl: './project-status-form.component.html',
  styleUrls: ['./project-status-form.component.scss'],
})
export class ProjectStatusFormComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

clienteData = {
  statusProjeto: 'pessoaFisica'
};

onTipoClienteChange(selectedValue: string) {
  this.clienteData.statusProjeto = selectedValue;
  console.log('Tipo de Cliente Selecionado:', selectedValue);
}


}
