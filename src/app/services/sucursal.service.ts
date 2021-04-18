import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursal } from '../models/sucursal';
import { Response } from '../util/Response';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private http:HttpClient) { }

  URLSUCURSAL = "http://localhost:9898/app/sucursales";

  crearSucursal(sucursal: Sucursal, idRestaurante: string){
    return this.http.post<Response<Sucursal>>(this.URLSUCURSAL+`/${idRestaurante}`,sucursal);
  }

}
