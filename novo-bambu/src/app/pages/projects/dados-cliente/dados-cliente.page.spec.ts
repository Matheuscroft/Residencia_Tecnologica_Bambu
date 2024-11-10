import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular'; 
import { DadosClientePage } from './dados-cliente.page';

describe('DadosClientePage', () => {
  let component: DadosClientePage;
  let fixture: ComponentFixture<DadosClientePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadosClientePage],
      imports: [
        FormsModule, 
        IonicModule.forRoot() 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
  it('should update tipoCliente on select change', () => {
    const event = { target: { value: 'pessoaJuridica' } }; 
    component.onTipoClienteChange(event); 
    expect(component.clienteData.tipoCliente).toEqual('pessoaJuridica'); 
  });
});