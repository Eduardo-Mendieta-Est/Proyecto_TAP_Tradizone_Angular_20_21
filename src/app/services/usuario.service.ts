import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Response } from '../util/Response';
import { Avatar } from '../models/imagen/avatar';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "http://localhost:9898/app/usuarios/usuarios ";

  constructor(private httpClient:HttpClient) { }

  getUsuario(idUsuario: string, token: string){
    return this.httpClient.get<Response<Usuario>>(this.url+`/${idUsuario}/${token}`);
  }


  getAvatar(idUsuario: string){
    return this.httpClient.get<Response<Avatar>>(this.url+`/avatar/${idUsuario}`);
  }
}
