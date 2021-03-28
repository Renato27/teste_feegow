import { Injectable } from '@angular/core';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyMessageService } from './../../services/notify-message.service';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoInsertService {

  //@ts-ignore
  private _agendamentoComponent: AgendamentoComponent;

  constructor(private notifyMessage: NotifyMessageService) {}

  set agendamentoComponent(value: AgendamentoComponent){
    this._agendamentoComponent = value;
  }

  showModalInsert(profissional_id: number){
    this._agendamentoComponent.professionalId = profissional_id;
    this._agendamentoComponent.agendamentoCreateComponent.showModal();
  }

  onInsertSuccess($event: any){
    this.notifyMessage.success('Agendamento realizado com sucesso!');
  }

  onInsertError($event: HttpErrorResponse){
    this.notifyMessage.error('Ops....houve um erro ao realizar o agendamento. Verifique se seus dados estão corretos e tente novamente por favor.');
  }
}
