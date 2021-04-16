import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('imagenInputFile', {static:false}) imageFile: ElementRef;

  usuarioregForm: FormGroup;

  usuario= new Usuario;
  datosUsuario: Response<Usuario>;
  /*imagen: File;
  imagenMin: File;*/

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
      //imagen: new FormControl('', Validators.required)
    });
  }

  resetearFormulario(): void{
    this.usuarioregForm.reset();
    /*this.imagen = null;
    this.imagenMin = null;
    this.imageFile.nativeElement.value = '';*/
  }

  enviarFormulario(): void{
    if(this.usuarioregForm.valid){
      console.log(this.usuarioregForm.value);
      this.resetearFormulario();
    }else{
      console.log('formulario no valido');
    }
  }
  
  /*onFileChange(event){
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }*/

  guardarUsuario():void{
    this.usuario.nombre = this.usuarioregForm.get("nombres") + " " + this.usuarioregForm.get("apellidos");
    this.usuario.correo = this.usuarioregForm.get("username")+ "";
    this.usuario.contrasena = this.usuarioregForm.get("password")+"";

    this.usuarioService.createUsuario(this.usuario).subscribe(data=>{
      this.datosUsuario=data;
      console.log(data);
    }, er =>{
      alert("Tipo: "+er);
    });

  }


  get nombres(){return this.usuarioregForm.get('nombres')};
  get apellidos(){return this.usuarioregForm.get('apellidos')};
  get username(){return this.usuarioregForm.get('username')};
  get password(){return this.usuarioregForm.get('password')};
  //get imagenperfil(){return this.usuarioregForm.get('imagenperfil')};
}
