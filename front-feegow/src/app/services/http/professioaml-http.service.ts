import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessioamlHttpService {

  private baseUrl = `${environment.api.url}/profissionais`

  constructor(private http: HttpClient) { }

  list(especialidade_id: number) : Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.baseUrl}/${especialidade_id}`)
  }
}
