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

  url = "http://localhost:9898/app/restaurantes";



  constructor(private httpClient :HttpClient) { }



  crearRestaurante(restaurante: Restaurante, idUsuario: String) {
    return this.httpClient.post<Response<Restaurante>>(this.url+`/${idUsuario}`, restaurante);
  }


  crearLogo(logoRestaurante: File, idRestaurante: string) {
    const formData = new FormData();
    formData.append('logoRestaurante', logoRestaurante);
    return this.httpClient.post<Response<Logo>>(this.url+`/logo/${idRestaurante}`, formData);
  }

  getRestaurante(idUsuario: string) {
    return this.httpClient.get<Response<Restaurante>>(this.url+`/${idUsuario}`);
  }
}
