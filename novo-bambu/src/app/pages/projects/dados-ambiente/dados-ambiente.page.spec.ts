import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosAmbientePage } from './dados-ambiente.page';

describe('DadosAmbientePage', () => {
  let component: DadosAmbientePage;
  let fixture: ComponentFixture<DadosAmbientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAmbientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
