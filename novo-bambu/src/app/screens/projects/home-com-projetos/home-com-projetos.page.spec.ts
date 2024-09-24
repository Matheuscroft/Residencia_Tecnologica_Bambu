import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComProjetosPage } from './home-com-projetos.page';

describe('HomeComProjetosPage', () => {
  let component: HomeComProjetosPage;
  let fixture: ComponentFixture<HomeComProjetosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComProjetosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
