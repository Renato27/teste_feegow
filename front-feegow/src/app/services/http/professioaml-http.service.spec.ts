import { TestBed } from '@angular/core/testing';

import { ProfessioamlHttpService } from './professioaml-http.service';

describe('ProfessioamlHttpService', () => {
  let service: ProfessioamlHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessioamlHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
