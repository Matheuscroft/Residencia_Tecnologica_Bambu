import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaCodigoPage } from './tela-codigo.page';

describe('TelaCodigoPage', () => {
  let component: TelaCodigoPage;
  let fixture: ComponentFixture<TelaCodigoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
