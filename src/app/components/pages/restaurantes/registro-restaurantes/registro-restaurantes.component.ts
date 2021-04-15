import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-restaurantes',
  templateUrl: './registro-restaurantes.component.html',
  styleUrls: ['./registro-restaurantes.component.css']
})
export class RegistroRestaurantesComponent implements OnInit {

  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;

  restauranteForm: FormGroup;

  imagen: File;
  imagenMin: File;

  constructor() {
    this.restauranteForm = this.crearFormGroup();
   }

  ngOnInit(): void {
  }


  crearFormGroup(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      slogan: new FormControl('', Validators.required)
    });
  }


  resetearFormulario(): void {
    this.restauranteForm.reset();
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }


  enviarFormulario(): void {
    if(this.restauranteForm.valid){
      console.log(this.restauranteForm.value);
      this.resetearFormulario();
    }else{
      console.log('formulario no valido');
    }
  
  }


  onFileChange(event){
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }


  /* --------------------- getters --------------------- */
  get nombre(){return this.restauranteForm.get('nombre')}
  get telefono(){return this.restauranteForm.get('telefono')}
  get slogan(){return this.restauranteForm.get('slogan')}

}
