import { TestBed } from '@angular/core/testing';

import { AgendamentoHttpService } from './agendamento-http.service';

describe('AgendamentoHttpService', () => {
  let service: AgendamentoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
