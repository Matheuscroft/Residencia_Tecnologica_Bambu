import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButtonAdicionarProjetoComponent } from './button-adicionar-projeto.component';

describe('ButtonAdicionarProjetoComponent', () => {
  let component: ButtonAdicionarProjetoComponent;
  let fixture: ComponentFixture<ButtonAdicionarProjetoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAdicionarProjetoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonAdicionarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});