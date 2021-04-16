import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Response } from 'src/app/util/Response';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {


  usuarioregForm: FormGroup;

  usuario= new Usuario;
  datosUsuario: Response<Usuario>;

  constructor(private usuarioService: UsuarioService) {
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
  

  guardarUsuario():void{
    this.usuario.nombre = this.usuarioregForm.get("nombres") + " " + this.usuarioregForm.get("apellidos");
    this.usuario.correo = this.usuarioregForm.get("username")+ "";
    this.usuario.contrasena = this.usuarioregForm.get("password")+"";

    this.usuarioService.createUsuario(this.usuario).subscribe(data=>{
      this.datosUsuario=data;
      console.log(data);
    }, err=>{
      console.log(err);
    });

  }


  get nombres(){return this.usuarioregForm.get('nombres')};
  get apellidos(){return this.usuarioregForm.get('apellidos')};
  get username(){return this.usuarioregForm.get('username')};
  get password(){return this.usuarioregForm.get('password')};
}
