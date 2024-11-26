import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AmbienteServiceService } from 'src/app/services/ambiente-service.service';
import { AmbienteService } from 'src/app/services/shared/ambiente.service';
import { ProjetoidService } from 'src/app/services/shared/projetoid.service';

interface Ambiente {
  nome: string;
  quantidade: number;
  tamanho: string; // Define tamanho como string obrigatória
}

@Component({
  selector: 'app-dados-ambientes-tamanho',
  templateUrl: './dados-ambientes-tamanho.page.html',
  styleUrls: ['./dados-ambientes-tamanho.page.scss'],
})
export class DadosAmbientesTamanhoPage implements OnInit {
  ambientes: Ambiente[] = [];
  dadosAmbientes: any;
  projetoId: string | null = null;

  constructor(private navCtrl: NavController, private ambienteService: AmbienteService, private ambienteServiceBackend: AmbienteServiceService) {}

  ngOnInit() {

    this.dadosAmbientes = this.ambienteService.getDadosAmbientes();
    console.log('Dados recebidos:', this.dadosAmbientes);
    
  }


  gerarListaDeAmbientes(ambientesSelecionados: Ambiente[]) {
    ambientesSelecionados.forEach(ambiente => {
      if (ambiente.quantidade > 1) {
        for (let i = 1; i <= ambiente.quantidade; i++) {
          this.ambientes.push({ nome: `${ambiente.nome} ${i}`, quantidade: 1, tamanho: '' });
        }
      } else {
        this.ambientes.push({ nome: ambiente.nome, quantidade: 1, tamanho: '' });
      }
    });
  }


  atualizarTamanho(index: number, novoTamanho: string) {
   /* this.ambientes[index].tamanho = novoTamanho;
    this.atualizarLocalStorage();*/

    this.dadosAmbientes.ambientes[index].tamanho = novoTamanho;

  }

  removerAmbiente(index: number) {
    this.ambientes.splice(index, 1);
    this.atualizarLocalStorage();
  }

  atualizarLocalStorage() {
    const dadosAtualizados = this.ambientes.map(a => ({
      nome: a.nome.replace(/\d+$/, '').trim(),
      quantidade: a.quantidade,
      tamanho: a.tamanho,
    }));
    localStorage.setItem('ambientesSelecionados', JSON.stringify(dadosAtualizados));
  }

  salvarTamanhos() {
    
    console.log('Dados para envio:', this.dadosAmbientes);
    // Envie os dadosCompletos ao backend

    this.ambienteServiceBackend.registerAmbiente(this.dadosAmbientes.projetoId, this.dadosAmbientes.ambientes).subscribe(
      response => {
        console.log('Ambientes criados com sucesso', response);
        this.navCtrl.navigateForward('/projetos-home');
      },
      error => {
        console.error('Erro ao criar ambientes', error);
      }
    );
  }

}

