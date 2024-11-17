import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoServiceService {

  private apiUrl = 'http://localhost:8080/projetos';

  constructor(private http: HttpClient) { }

  getProjetoList(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  registerProjeto(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
