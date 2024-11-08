import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComProjetosPage } from './home-com-projetos.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComProjetosPage', () => {
  let component: HomeComProjetosPage;
  let fixture: ComponentFixture<HomeComProjetosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComProjetosPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Adicionado para ignorar elementos customizados
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComProjetosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});