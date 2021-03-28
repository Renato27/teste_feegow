import { Component, OnInit, ViewChild } from '@angular/core';
import { AgendamentoCreateModalComponent } from './../agendamento-create-modal/agendamento-create-modal.component';
import { AgendamentoInsertService } from './../agendamento-insert.service';
import { SpecialtiesHttpService } from './../../../services/http/specialties-http.service';
import { ProfessioamlHttpService } from './../../../services/http/professioaml-http.service';
import { NotifyMessageService } from './../../../services/notify-message.service';
import { especialidades } from 'src/app/models/models';

@Component({
  selector: 'agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  specialties: Array<especialidades>;
  professional = [];
  especialidade_id: number;
  professionalId: number;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  showProfessional: boolean;

  @ViewChild(AgendamentoCreateModalComponent) agendamentoCreateComponent: AgendamentoCreateModalComponent;

  constructor(public agendamentoInsertService: AgendamentoInsertService,
    private specialtiesHttp: SpecialtiesHttpService,
    private professionalHttp: ProfessioamlHttpService,
    private notiFyMesage: NotifyMessageService) {
    this.agendamentoInsertService.agendamentoComponent = this;
  }

  ngOnInit(): void {
    this.getSpecialties();
  }

  getSpecialties(){
    this.specialtiesHttp.list()
      .subscribe(response => {
        this.specialties = response;
      })
  }


  getProfessional(especialidade_id: number){
    this.professionalHttp.list(especialidade_id)
      .subscribe(response => {
        this.professional = response
        this.showProfessional = true;
      }, error => {
        this.notiFyMesage.error('Desculpe, no momento não temos profissionais da especialidade selecionada.')
        this.showProfessional = false;
      });
  }

  onItemSelect(especialidade_id: any) {
    console.log(especialidade_id);
    this.getProfessional(especialidade_id);
    this.agendamentoCreateComponent.form.controls['specialty_id'].setValue(especialidade_id);
  }
}
