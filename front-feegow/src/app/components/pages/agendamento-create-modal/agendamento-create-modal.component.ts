import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { ModalComponent } from './../../bootstrap/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendamentoHttpService } from './../../../services/http/agendamento-http.service';
import { NotifyMessageService } from './../../../services/notify-message.service';

@Component({
  selector: 'agendamento-create-modal',
  templateUrl: './agendamento-create-modal.component.html',
  styleUrls: ['./agendamento-create-modal.component.css']
})
export class AgendamentoCreateModalComponent implements OnInit {

  @ViewChild(ModalComponent) modal!: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() OnError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  form: FormGroup

  sources: Array<any>;

  @Input() especialidade_id: number;
  @Input() profissional_id: number;

  constructor(private agendamentoHttp: AgendamentoHttpService, private formBuilder: FormBuilder, private notifyMessage: NotifyMessageService) {
      this.form = this.formBuilder.group({
        specialty_id: [''],
        professional_id: [''],
        name: ['', Validators.required],
        cpf: ['', Validators.required],
        source_id: ['', Validators.required],
        birthdate: ['', Validators.required],
        date_time: ['', Validators.required]
      })
   }

  ngOnInit(): void {
  }

  showModal(){
    this.getSources();
    this.modal.show();
  }

  hideModal($event: any){
    console.log($event)
  }

  getSources(){
    this.agendamentoHttp.list()
      .subscribe(response => {
        this.sources = response
      })
  }

  submit(){
    this.form.controls['professional_id'].setValue(this.profissional_id);

    this.agendamentoHttp.create(this.form.value)
    .subscribe(response => {
        this.onSuccess.emit(response);
        this.modal.hide();
      }, error => {
        this.OnError.emit(error)
      });
  }

}
