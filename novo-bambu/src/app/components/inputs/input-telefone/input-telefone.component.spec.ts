import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTelefoneComponent } from './input-telefone.component';
import { IonicModule } from '@ionic/angular';

describe('InputTelefoneComponent', () => {
  let component: InputTelefoneComponent;
  let fixture: ComponentFixture<InputTelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTelefoneComponent ],
      imports: [ IonicModule.forRoot() ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
