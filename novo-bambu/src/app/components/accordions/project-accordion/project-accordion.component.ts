import { Component, OnInit, Input } from '@angular/core';
import { EtapaService } from 'src/app/services/etapa.service';
import { ReuniaoService } from 'src/app/services/reuniao.service';

@Component({
  selector: 'ProjectAccordion',
  templateUrl: './project-accordion.component.html',
  styleUrls: ['./project-accordion.component.scss'],
})
export class ProjectAccordionComponent implements OnInit {

  @Input() etapa: any;
  @Input() index!: number;
  @Input() reunioes: any[] = [];

  reuniao: any = {};
  cardExpandido = false;
  editandoTitulo = false;

  constructor(private reuniaoService: ReuniaoService, private etapaService: EtapaService) { }

  ngOnInit() {
    console.log("this.etapa")
    console.log(this.etapa)
    this.reunioes = [...this.etapa.reunioes].sort((a, b) => a.nomeReuniao.localeCompare(b.nomeReuniao));
  
    console.log("this.reunioes");
    console.log(this.reunioes);
  }


  expandirCard(index: number) {
    this.cardExpandido = true;

    this.reuniao = { ...this.reunioes[index] };
  }

  voltar() {
    this.cardExpandido = false;
  }

  salvarObservacoes(): void {
    // Cria um novo objeto da etapa com as alterações nas observações
    const etapaAtualizada = {
      ...this.etapa,
      descricao: this.etapa.observacoes, // Atualiza apenas as observações
    };
  
    // Chama o serviço para atualizar a etapa no backend
    this.etapaService.updateEtapa(etapaAtualizada).subscribe(
      (response) => {
        console.log('Etapa atualizada com sucesso!', response);
  
        // Atualiza a etapa localmente
        this.etapa = { ...this.etapa, observacoes: etapaAtualizada.observacoes };
      },
      (error) => {
        console.error('Erro ao atualizar etapa', error);
      }
    );
  }
  
  atualizarData(campo: 'dataDeInicio' | 'dataPrevistaFim', valor: string): void {
    // Atualiza localmente
    this.etapa[campo] = valor;

    // Envia a atualização para o backend
    this.etapaService.updateEtapa(this.etapa).subscribe(
      (response) => {
        console.log(`Etapa atualizada com sucesso (${campo}):`, response);
      },
      (error) => {
        console.error(`Erro ao atualizar a etapa (${campo}):`, error);
      }
    );
  }
  

  salvarTitulo() {
    this.editandoTitulo = false;
    console.log('Título salvo:', this.reuniao.nomeReuniao);
  
    // Cria um novo objeto de reunião com o nome alterado, mas mantém os outros dados
    const reuniaoAtualizada = { 
      ...this.reuniao, // Mantém todos os outros campos
      nomeReuniao: this.reuniao.nomeReuniao // Atualiza apenas o nome
    };
  
    // Chama o serviço para atualizar a reunião no banco de dados
    this.reuniaoService.updateReuniao(this.reuniao.id, reuniaoAtualizada)
      .subscribe(
        (response) => {
          console.log('Reunião atualizada com sucesso!', response);
          
          // Atualiza a reunião na lista local com o nome modificado
          const index = this.reunioes.findIndex(r => r.id === this.reuniao.id);
          if (index !== -1) {
            // Mantém os dados anteriores, apenas atualizando o nome da reunião
            this.reunioes[index] = { ...this.reunioes[index], nomeReuniao: reuniaoAtualizada.nomeReuniao };
          }
          
          // Atualiza o objeto 'reuniao' local para refletir a mudança no nome
          this.reuniao = { ...this.reuniao, nomeReuniao: reuniaoAtualizada.nomeReuniao };
        },
        (error) => {
          console.error('Erro ao atualizar reunião', error);
        }
      );
  }

  salvarData() {
    console.log('Data salva:', this.reuniao.dataReuniao);
  
    // Cria um novo objeto de reunião com a data alterada, mas mantém os outros dados
    const reuniaoAtualizada = { 
      ...this.reuniao, // Mantém todos os outros campos
      dataReuniao: this.reuniao.dataReuniao // Atualiza apenas a data
    };
  
    // Chama o serviço para atualizar a reunião no banco de dados
    this.reuniaoService.updateReuniao(this.reuniao.id, reuniaoAtualizada)
      .subscribe(
        (response) => {
          console.log('Data atualizada com sucesso!', response);
          
          // Atualiza a reunião na lista local com a data modificada
          const index = this.reunioes.findIndex(r => r.id === this.reuniao.id);
          if (index !== -1) {
            this.reunioes[index] = { ...this.reunioes[index], dataReuniao: reuniaoAtualizada.dataReuniao };
          }
  
          // Atualiza o objeto 'reuniao' local para refletir a mudança na data
          this.reuniao = { ...this.reuniao, dataReuniao: reuniaoAtualizada.dataReuniao };
        },
        (error) => {
          console.error('Erro ao atualizar data da reunião', error);
        }
      );
  }
  
  
  salvarLocal() {
    console.log('Local salvo:', this.reuniao.local);
  
    // Cria um novo objeto de reunião com o local alterado, mas mantém os outros dados
    const reuniaoAtualizada = { 
      ...this.reuniao, // Mantém todos os outros campos
      local: this.reuniao.local // Atualiza apenas o local
    };
  
    // Chama o serviço para atualizar a reunião no banco de dados
    this.reuniaoService.updateReuniao(this.reuniao.id, reuniaoAtualizada)
      .subscribe(
        (response) => {
          console.log('Local atualizado com sucesso!', response);
          
          // Atualiza a reunião na lista local com o local modificado
          const index = this.reunioes.findIndex(r => r.id === this.reuniao.id);
          if (index !== -1) {
            this.reunioes[index] = { ...this.reunioes[index], local: reuniaoAtualizada.local };
          }
  
          // Atualiza o objeto 'reuniao' local para refletir a mudança no local
          this.reuniao = { ...this.reuniao, local: reuniaoAtualizada.local };
        },
        (error) => {
          console.error('Erro ao atualizar local da reunião', error);
        }
      );
  }
  
  salvarApontamentos() {
    console.log('Apontamentos salvos:', this.reuniao.apontamentos);
  
    // Cria um novo objeto de reunião com os apontamentos alterados, mas mantém os outros dados
    const reuniaoAtualizada = { 
      ...this.reuniao, // Mantém todos os outros campos
      apontamentos: this.reuniao.apontamentos // Atualiza apenas os apontamentos
    };
  
    // Chama o serviço para atualizar a reunião no banco de dados
    this.reuniaoService.updateReuniao(this.reuniao.id, reuniaoAtualizada)
      .subscribe(
        (response) => {
          console.log('Apontamentos atualizados com sucesso!', response);
          
          // Atualiza a reunião na lista local com os apontamentos modificados
          const index = this.reunioes.findIndex(r => r.id === this.reuniao.id);
          if (index !== -1) {
            this.reunioes[index] = { ...this.reunioes[index], apontamentos: reuniaoAtualizada.apontamentos };
          }
  
          // Atualiza o objeto 'reuniao' local para refletir a mudança nos apontamentos
          this.reuniao = { ...this.reuniao, apontamentos: reuniaoAtualizada.apontamentos };
        },
        (error) => {
          console.error('Erro ao atualizar apontamentos da reunião', error);
        }
      );
  }
  
  

  adicionarReuniao() {
    const novoTitulo = `Reunião ${this.reunioes.length + 1}`;
    const dataAtual = new Date();

    const novaReuniao = {
      nomeReuniao: novoTitulo,
      dataReuniao: dataAtual.toISOString(),
      local: 'Local padrão',
      apontamentos: 'Apontamentos da reunião',
      etapaId: this.etapa.id
    };
    this.reunioes.push(novaReuniao);

    this.reuniaoService.criarReuniao(novaReuniao)
      .subscribe(
        (response) => {
          console.log('Reunião criada com sucesso', response);
          // Aqui você pode adicionar qualquer lógica adicional após o POST ser bem-sucedido
        },
        (error) => {
          console.error('Erro ao criar reunião', error);
          // Se houver erro, você pode remover a reunião localmente ou exibir uma mensagem de erro
          this.reunioes.pop(); // Remove a reunião local caso o POST falhe
        }
      );
  }



}
