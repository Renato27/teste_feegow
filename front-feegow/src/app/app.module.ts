import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertErrorComponent } from './components/bootstrap/alert-error/alert-error.component';
import { NavbarComponent } from './components/bootstrap/navbar/navbar.component';
import { AgendamentoComponent } from './components/pages/agendamento/agendamento.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalComponent } from './components/bootstrap/modal/modal.component';
import { AgendamentoCreateModalComponent } from './components/pages/agendamento-create-modal/agendamento-create-modal.component';
import { AgendamentoFormComponent } from './components/pages/agendamento-form/agendamento-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    AlertErrorComponent,
    NavbarComponent,
    AgendamentoComponent,
    ModalComponent,
    AgendamentoCreateModalComponent,
    AgendamentoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxMaskModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
