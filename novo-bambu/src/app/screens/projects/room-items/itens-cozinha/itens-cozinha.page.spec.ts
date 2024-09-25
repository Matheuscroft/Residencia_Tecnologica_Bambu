import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItensCozinhaPage } from './itens-cozinha.page';

describe('ItensCozinhaPage', () => {
  let component: ItensCozinhaPage;
  let fixture: ComponentFixture<ItensCozinhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensCozinhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
