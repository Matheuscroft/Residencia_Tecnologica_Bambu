import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSenhaComponent } from './input-senha.component';
import { IonicModule } from '@ionic/angular';

describe('InputSenhaComponent', () => {
  let component: InputSenhaComponent;
  let fixture: ComponentFixture<InputSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSenhaComponent ],
      imports: [ IonicModule.forRoot() ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    expect(component.senhaVisible).toBe(false);
    component.toggleSenhaVisibility();
    expect(component.senhaVisible).toBe(true);
  });

  it('should check if passwords match', () => {
    component.senha = '123456';
    component.confirmSenha = '123456';
    component.checkSenhaMatch();
    expect(component.senhaMatchMessage).toBe('');

    component.confirmSenha = '654321';
    component.checkSenhaMatch();
    expect(component.senhaMatchMessage).toBe('As senhas não coincidem');
  });
});
