import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuServicoService {

  private apiUrl = 'http://localhost:8080/arquitetos'; // Altere para o endpoint correto da API

  constructor(private http: HttpClient) { }

   // Método GET - Retorna um Observable
  getArquitetoList() {
    return this.http.get(this.apiUrl);  // Retorna um Observable diretamente
  }

  // Método POST - Envia os dados e retorna um Observable
  registerArquiteto(data: any) {
    return this.http.post(this.apiUrl, data);  // Retorna um Observable
  }
}
