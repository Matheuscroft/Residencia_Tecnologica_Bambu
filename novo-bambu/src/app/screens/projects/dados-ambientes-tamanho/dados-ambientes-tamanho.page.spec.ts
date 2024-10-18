import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosAmbientesTamanhoPage } from './dados-ambientes-tamanho.page';

describe('DadosAmbientesTamanhoPage', () => {
  let component: DadosAmbientesTamanhoPage;
  let fixture: ComponentFixture<DadosAmbientesTamanhoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAmbientesTamanhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
