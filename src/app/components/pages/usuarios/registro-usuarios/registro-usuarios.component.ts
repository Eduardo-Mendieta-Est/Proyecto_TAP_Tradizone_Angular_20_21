import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SesionService } from 'src/app/services/sesion.service';
import { Usuario } from 'src/app/models/usuario';
import { Sesion } from 'src/app/models/autenticacion/sesion';
import { GlobalApp } from 'src/app/models/autenticacion/global_app';
import { HttpStatus } from 'src/app/util/http_status';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {


  usuarioregForm: FormGroup;

  usuario: Usuario;
  sesion: Sesion;
  codigo: number;

  constructor(private sesionService: SesionService, private router: Router) {
    this.usuarioregForm = this.crearFormGroup();
  }

  ngOnInit(): void {
  }

  crearFormGroup(): FormGroup{
    return new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  resetearFormulario(): void{
    this.usuarioregForm.reset();

  }


  registrarUsuario():void{
    this.usuario = new Usuario;
    this.usuario.nombre = this.usuarioregForm.get("nombres").value + " " + this.usuarioregForm.get("apellidos").value;
    this.usuario.correo = this.usuarioregForm.get("username").value;
    this.usuario.contrasena = this.usuarioregForm.get("password").value;

    if(this.usuarioregForm.valid){
      
      this.sesionService.registrarUsuario(this.usuario).subscribe(
        data => {
          this.sesion = data.objectResponse;
          if(data.codigoHttp === HttpStatus.CREATED){
            this.setUserSession(this.sesion);
            this.router.navigate(['/home']);

          }else{
            alert("¡Ya existe uin usuario con ese correo Electronico!");
          }
        },
        err => console.log(err)
      );
    }else{
      
      alert("¡Por favor debe llenar todos los campos!");
    }

  }


  setUserSession(sesion: Sesion): void {
    GlobalApp.appUserId = sesion.idUsuario;
    GlobalApp.serverToken = sesion.token;
  }


  get nombres(){return this.usuarioregForm.get('nombres')};
  get apellidos(){return this.usuarioregForm.get('apellidos')};
  get username(){return this.usuarioregForm.get('username')};
  get password(){return this.usuarioregForm.get('password')};
}
