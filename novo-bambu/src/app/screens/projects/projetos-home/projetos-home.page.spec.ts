import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetosHomePage } from './projetos-home.page';

describe('ProjetosHomePage', () => {
  let component: ProjetosHomePage;
  let fixture: ComponentFixture<ProjetosHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
