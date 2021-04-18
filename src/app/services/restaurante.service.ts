import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logo } from '../models/imagen/logo';
import { Local } from '../models/local';
import { Restaurante } from '../models/restaurante';
import { Response } from '../util/Response';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  urlBase = "http://localhost:9898/app/restaurantes";



  constructor(private httpClient :HttpClient) { }



  crearRestaurante(restaurante: Restaurante, idUsuario: String) {
    return this.httpClient.post<Response<Restaurante>>(this.urlBase+`/${idUsuario}`, restaurante);
  }


  crearLogo(logoRestaurante: File, idRestaurante: string) {
    const formData = new FormData();
    formData.append('logoRestaurante', logoRestaurante);
    return this.httpClient.post<Response<Logo>>(this.urlBase+`/logo/${idRestaurante}`, formData);
  }
}
