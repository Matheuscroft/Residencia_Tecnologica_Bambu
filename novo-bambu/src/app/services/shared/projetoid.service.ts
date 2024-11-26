import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetoidService {

  constructor() { }

  private projetoId: string | null = null;

  setProjetoId(id: string) {
    this.projetoId = id;
  }

  getProjetoId(): string | null {
    return this.projetoId;
  }
}
