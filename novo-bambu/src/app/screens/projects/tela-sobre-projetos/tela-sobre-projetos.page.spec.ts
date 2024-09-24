import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaSobreProjetosPage } from './tela-sobre-projetos.page';

describe('TelaSobreProjetosPage', () => {
  let component: TelaSobreProjetosPage;
  let fixture: ComponentFixture<TelaSobreProjetosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSobreProjetosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
