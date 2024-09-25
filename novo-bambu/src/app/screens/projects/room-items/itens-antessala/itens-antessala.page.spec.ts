import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItensAntessalaPage } from './itens-antessala.page';

describe('ItensAntessalaPage', () => {
  let component: ItensAntessalaPage;
  let fixture: ComponentFixture<ItensAntessalaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensAntessalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
