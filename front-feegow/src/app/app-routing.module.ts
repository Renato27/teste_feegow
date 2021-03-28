import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './components/pages/agendamento/agendamento.component';

const routes: Routes = [

  {
    path: 'agendamento',
    component: AgendamentoComponent,

  },
]

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
