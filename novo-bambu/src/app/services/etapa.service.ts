import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReuniaoService } from './reuniao.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EtapaService {
  private apiUrl = 'http://localhost:8080/etapas';

 /* constructor(private http: HttpClient) {}

  getEtapasByProjetoId(projetoId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${projetoId}`);
  }*/

    constructor(
      private http: HttpClient,
      private reuniaoService: ReuniaoService
    ) {}
  
    getEtapasWithReunioes(projetoId: string): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/${projetoId}`).pipe(
        map((etapas) =>
          etapas.map((etapa) => ({
            ...etapa,
            reunioes$: this.reuniaoService.getReunioesByEtapaId(etapa.id),
          }))
        )
      );
    }

    updateEtapa(etapa: any): Observable<any> {
      const url = `${this.apiUrl}/${etapa.id}`;
      return this.http.put<any>(url, etapa);
    }


}
