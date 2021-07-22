import { TestBed } from '@angular/core/testing';

import { TemperaturasService } from './temperaturas.service';

describe('TemperaturasService', () => {
  let service: TemperaturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperaturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
