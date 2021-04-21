import { Component, OnInit } from '@angular/core';
import { GlobalApp } from 'src/app/models/autenticacion/global_app';
import { Avatar } from 'src/app/models/imagen/avatar';
import { Restaurante } from 'src/app/models/restaurante';
import { Usuario } from 'src/app/models/usuario';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpStatus } from 'src/app/util/http_status';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  avatar: Avatar = null;
  restaurante: Restaurante = null;
  usuario: Usuario = null;

  constructor(private restauranteService: RestauranteService, private usuarioService: UsuarioService) { 
  }

  ngOnInit(): void {

    this.usuarioService.getUsuario(GlobalApp.appUserId, GlobalApp.serverToken).subscribe(
      data => {
        this.usuario = data.objectResponse;
        console.log(data)
        if(this.usuario != null){
          this.usuarioService.getAvatar(this.usuario.id).subscribe(
            data => this.avatar = data.objectResponse
          );
        }
      }
    );

    this.restauranteService.getRestaurante(GlobalApp.appUserId).subscribe(
      data => {
        this.restaurante = data.objectResponse;
        console.log(data)
      }
    );

   
  }
}
