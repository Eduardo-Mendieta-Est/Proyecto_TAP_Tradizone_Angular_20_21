import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Local } from 'src/app/models/local';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

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
  restaurante: Restaurante;
  local: Local;

  constructor(private restauranteService : RestauranteService) {
    this.restauranteForm = this.crearFormGroup();
   }

  ngOnInit(): void {
  }


  crearFormGroup(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      direccion : new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      celular : new FormControl('', Validators.required),
      horaInicio: new FormControl('', Validators.required),
      horaFin: new FormControl('', Validators.required),
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

    this.restaurante = new Restaurante();
    this.restaurante.nombre = this.restauranteForm.get('nombre').value;
    this.restaurante.slogan = this.restauranteForm.get('slogan').value;

    this.local = new Local();
    this.local.direccion = this.restauranteForm.get('direccion').value;
    this.local.telefono = this.restauranteForm.get('telefono').value;
    this.local.celular = this.restauranteForm.get('celular').value;
    this.local.horaInicio = this.restauranteForm.get('horaInicio').value;
    this.local.horaFin = this.restauranteForm.get('horaFin').value;

    if(this.imagen != null){
      this.restauranteService.crearRestaurante(this.restaurante, this.local, this.imagen, "").subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
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
  get direccion(){return this.restauranteForm.get('direccion')}
  get celular(){return this.restauranteForm.get('celular')}
  get horaInicio(){return this.restauranteForm.get('horaInicio')}
  get horaFin(){return this.restauranteForm.get('horaFin')}

}
