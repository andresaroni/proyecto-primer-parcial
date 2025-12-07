import { TestBed } from '@angular/core/testing';

import { ServiciosTuristicos } from './servicios-turisticos';

describe('ServiciosTuristicos', () => {
  let service: ServiciosTuristicos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosTuristicos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
