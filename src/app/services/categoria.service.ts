import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Response } from '../util/Response';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  URLCATEGORIA = "http://localhost:9898/app/categorias";

  getCategorias(){
    return this.http.get<Response<Categoria>>(this.URLCATEGORIA)
  }
}
