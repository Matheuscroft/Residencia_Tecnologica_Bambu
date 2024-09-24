import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosClientePage } from './dados-cliente.page';

describe('DadosClientePage', () => {
  let component: DadosClientePage;
  let fixture: ComponentFixture<DadosClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
