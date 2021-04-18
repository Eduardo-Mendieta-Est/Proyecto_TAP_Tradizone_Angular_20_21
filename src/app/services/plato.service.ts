import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plato } from '../models/plato';
import { Response } from '../util/Response';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private http:HttpClient) { }

  URLPLATO = "";

  crearPlato(plato: Plato){
    return this.http.post<Response<Plato>>(this.URLPLATO,plato);
  }
}
