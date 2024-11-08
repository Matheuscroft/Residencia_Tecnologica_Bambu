import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputCPFComponent } from './input-cpf.component';
import { IonicModule } from '@ionic/angular';

describe('InputCPFComponent', () => {
  let component: InputCPFComponent;
  let fixture: ComponentFixture<InputCPFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCPFComponent ],
      imports: [ IonicModule.forRoot() ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputCPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
