import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReuniaoService {
  private apiUrl = 'http://localhost:8080/reunioes';

  constructor(private http: HttpClient) {}

  getReunioesByEtapaId(etapaId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${etapaId}`);
  }

  updateReuniao(reuniaoId: string, reuniao: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${reuniaoId}`, reuniao);
  }

  criarReuniao(reuniao: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, reuniao, {
      params: { etapaId: reuniao.etapaId }
    });
  }
}
