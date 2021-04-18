import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local } from '../models/local';
import { Restaurante } from '../models/restaurante';
import { Response } from '../util/Response';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  urlBase = "http://localhost:9898/app/restaurantes";



  constructor(private httpClient :HttpClient) { }



  crearRestaurante(restaurante: Restaurante, local: Local, logoRestaurante : File, idUsuario: string) {

    const formData = new FormData();
    formData.append('logoRestaurante', logoRestaurante);
    return this.httpClient.post<Response<Restaurante>>(this.urlBase+`/${idUsuario}`, [restaurante, local, formData]);
  }
}
