import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Response } from '../util/Response';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "http://localhost:9898/app/usuarios ";

  constructor(private http:HttpClient) { }
}
