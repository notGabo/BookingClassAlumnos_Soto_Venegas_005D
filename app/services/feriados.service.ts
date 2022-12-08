import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeriadosService {



  constructor(private http: HttpClient) { }

  getFeriados() {
    return this.http.get('https://apis.digital.gob.cl/fl/feriados/2022');
  }
}
