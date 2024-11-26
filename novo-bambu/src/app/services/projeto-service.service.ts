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

  deleteProjeto(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  updateProjeto(id: string, data: any): Observable<any> {
    console.log("data")
    console.log(data)
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data);
  }
  
}
