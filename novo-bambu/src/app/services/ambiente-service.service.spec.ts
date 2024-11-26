import { TestBed } from '@angular/core/testing';

import { AmbienteServiceService } from './ambiente-service.service';

describe('AmbienteServiceService', () => {
  let service: AmbienteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbienteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
