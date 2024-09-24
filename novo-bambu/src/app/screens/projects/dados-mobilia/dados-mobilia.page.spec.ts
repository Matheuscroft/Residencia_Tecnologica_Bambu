import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosMobiliaPage } from './dados-mobilia.page';

describe('DadosMobiliaPage', () => {
  let component: DadosMobiliaPage;
  let fixture: ComponentFixture<DadosMobiliaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosMobiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
