import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Response } from '../util/Response';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  URLUSUARIO = "http://localhost:9898/app/usuarios ";

  createUsuario(usuario: Usuario){
    return this.http.post<Response<Usuario>>(this.URLUSUARIO,usuario); 
  }

}
