import { TestBed } from '@angular/core/testing';

import { SpecialtiesHttpService } from './specialties-http.service';

describe('SpecialtiesHttpService', () => {
  let service: SpecialtiesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialtiesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
