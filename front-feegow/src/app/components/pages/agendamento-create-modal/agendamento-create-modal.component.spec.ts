import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoCreateModalComponent } from './agendamento-create-modal.component';

describe('AgendamentoCreateModalComponent', () => {
  let component: AgendamentoCreateModalComponent;
  let fixture: ComponentFixture<AgendamentoCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoCreateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
