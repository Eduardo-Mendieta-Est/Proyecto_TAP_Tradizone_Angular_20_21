import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Response } from '../util/Response';
import { Sesion } from '../models/autenticacion/sesion';


@Injectable({
  providedIn: 'root'
})
export class SesionService {

  url = "http://localhost:9898/app/sesion";

  constructor(private http : HttpClient) { }


  registrarUsuario(usuario: Usuario) {
    return this.http.post<Response<Sesion>>(this.url+'/registro', usuario);
  }


  login(correo: string, contrasena: string) {
    return this.http.get<Response<Sesion>>(this.url+`/login/${correo}/${contrasena}`);
  }

  logout(idUsuario: string) {
    return this.http.get<Response<Sesion>>(this.url+`/logout/${idUsuario}`);
  }
}
