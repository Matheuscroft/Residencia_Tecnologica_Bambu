import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItensQuartoPage } from './itens-quarto.page';

describe('ItensQuartoPage', () => {
  let component: ItensQuartoPage;
  let fixture: ComponentFixture<ItensQuartoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensQuartoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
