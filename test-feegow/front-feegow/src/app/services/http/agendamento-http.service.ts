import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoHttpService {

  private baseUrl1 = `${environment.api.url}/agendamentos`;
  private baseUrl2 = `${environment.api.url}/agendamentos`;

  constructor(private http: HttpClient) { }

  list() : Observable<Array<any>>{
    return this.http.get<Array<any>>(this.baseUrl1)
  }

  create(data: Array<any>) : Observable<Array<any>>{
    return this.http.post<Array<any>>(this.baseUrl2, data)
      .pipe(
        map(response => response)
      )
  }
}
