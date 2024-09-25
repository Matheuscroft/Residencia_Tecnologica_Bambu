import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItensSalaPage } from './itens-sala.page';

describe('ItensSalaPage', () => {
  let component: ItensSalaPage;
  let fixture: ComponentFixture<ItensSalaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensSalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
