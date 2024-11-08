import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputEmailComponent } from './input-email.component';
import { IonicModule } from '@ionic/angular';

describe('InputEmailComponent', () => {
  let component: InputEmailComponent;
  let fixture: ComponentFixture<InputEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEmailComponent ],
      imports: [ IonicModule.forRoot() ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate email correctly', () => {
    component.validateEmail({ target: { value: 'invalid-email' } });
    expect(component.isValid).toBe(false);
    
    component.validateEmail({ target: { value: 'user@example.com' } });
    expect(component.isValid).toBe(true);
  });
});
