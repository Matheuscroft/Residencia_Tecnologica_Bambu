import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AmbienteServiceService } from 'src/app/services/ambiente-service.service';
import { EtapaService } from 'src/app/services/etapa.service';

@Component({
  selector: 'ProjectModal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent implements OnInit {
  @Input() selectedSegment: string = 'etapas';
  @Input() projeto: any;

  ambientes: any[] = [];
  etapas: any[] = [];


  constructor(private modalController: ModalController, private ambienteService: AmbienteServiceService, private etapaService: EtapaService) {}

  ngOnInit() {
    if (this.projeto?.id) {
      this.fetchAmbientes(this.projeto.id);
      this.fetchEtapas(this.projeto.id);
    }
  }
  

  fetchAmbientes(projetoId: string) {
    this.ambienteService.getAmbientesByProjeto(projetoId).subscribe(
      (response) => {
        this.ambientes = response;
      },
      (error) => {
        console.error('Erro ao buscar ambientes:', error);
      }
    );
  }

  fetchEtapas(projetoId: string) {
    this.etapaService.getEtapasWithReunioes(projetoId).subscribe(
      (response) => {
        this.etapas = response.sort((a: any, b: any) => {
          const nomeA = a.nomeDaEtapa?.toLowerCase() || '';
          const nomeB = b.nomeDaEtapa?.toLowerCase() || '';
          return nomeA.localeCompare(nomeB, 'pt-BR', { numeric: true });
        });
        console.log("Etapas ordenadas:", this.etapas);
      },
      (error) => {
        console.error('Erro ao buscar etapas:', error);
      }
    );
  }
  

  closeModal() {
    this.modalController.dismiss();
  }
}