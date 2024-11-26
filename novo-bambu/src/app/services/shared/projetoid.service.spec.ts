import { TestBed } from '@angular/core/testing';

import { ProjetoidService } from './projetoid.service';

describe('ProjetoidService', () => {
  let service: ProjetoidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetoidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
