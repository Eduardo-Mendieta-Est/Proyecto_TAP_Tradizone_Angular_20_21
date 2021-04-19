import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImagenPlato } from '../models/imagen/imagen_plato';
import { Plato } from '../models/plato';
import { Response } from '../util/Response';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private http:HttpClient) { }

  URLPLATO = "http://localhost:9898/app/platos";

  crearPlato(plato: Plato, idRestaurante: string){
    return this.http.post<Response<Plato>>(this.URLPLATO+`/${idRestaurante}`,plato);
  }

  crearImagenPlato(imagenPlato: File, idPlato: string){
    const formData = new FormData();
    formData.append('imagenPlato', imagenPlato);
    return this.http.post<Response<ImagenPlato>>(this.URLPLATO+`/imagenPlato/${idPlato}`,formData);
  }
}
