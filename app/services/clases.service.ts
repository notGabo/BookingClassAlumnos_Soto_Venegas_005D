import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LClases } from '../interfaces/l-clases';
import { LClase } from '../interfaces/l-clase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor(private http: HttpClient) { }

  listarClases(): Observable<LClases[]> {
    return this.http.get<LClases[]>(`${environment.apiURL}clases`);
  }

  crearClase(newClase: LClase): Observable<LClase> {
    return this.http.post<LClase>(`${environment.apiURL}clases`, newClase);
  }

}


