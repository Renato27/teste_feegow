import { TestBed } from '@angular/core/testing';

import { AgendamentoInsertService } from './agendamento-insert.service';

describe('AgendamentoInsertService', () => {
  let service: AgendamentoInsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentoInsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
