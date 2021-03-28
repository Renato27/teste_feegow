import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css']
})
export class AgendamentoFormComponent implements OnInit {

  @Input()
  form!: FormGroup;

  @Input() sources: Array<any>;

  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
      this.changeRef.detectChanges();

  }
}
