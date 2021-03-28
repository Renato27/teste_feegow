import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { especialidades } from 'src/app/models/models';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesHttpService {

  private baseUrl = `${environment.api.url}/especialidades`

  constructor(private http: HttpClient) { }

  list() : Observable<Array<any>>{
    return this.http.get<Array<any>>(this.baseUrl)
  }

}
