import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosProjetoPage } from './dados-projeto.page';

describe('DadosProjetoPage', () => {
  let component: DadosProjetoPage;
  let fixture: ComponentFixture<DadosProjetoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosProjetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
