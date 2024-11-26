import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbienteServiceService {

  private apiUrl = 'http://localhost:8080/ambientes';

  constructor(private http: HttpClient) { }

  getAmbientesByProjeto(projetoId: string): Observable<any> {
    const params = new HttpParams().set('projetoId', projetoId);
    return this.http.get(`${this.apiUrl}/by-projeto`, { params });
  }
  

  registerAmbiente(projetoId: string, ambientes: any[]): Observable<any> {
    
    const params = new HttpParams().set('projetoId', projetoId);

    return this.http.post(this.apiUrl, ambientes, { params, responseType: 'text'  });
  }

}
