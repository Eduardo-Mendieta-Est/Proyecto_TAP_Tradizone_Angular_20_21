import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sucursal } from 'src/app/models/sucursal';
import { SucursalService } from 'src/app/services/sucursal.service';
import { Response } from 'src/app/util/Response';

@Component({
  selector: 'app-formulario-sucursal',
  templateUrl: './formulario-sucursal.component.html',
  styleUrls: ['./formulario-sucursal.component.css']
})
export class FormularioSucursalComponent implements OnInit {

  sucursalForm: FormGroup;
  sucursal= new Sucursal;
  datoSucursal: Response<Sucursal>;

  constructor(private sucursalService: SucursalService) {
    this.sucursalForm = this.crearFormGroup();
   }

  ngOnInit(): void {
  }

  crearFormGroup(): FormGroup{
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      horaInicio: new FormControl('', Validators.required),
      horaFin: new FormControl('', Validators.required),
    });
  }

  resetearFormulario(): void{
    this.sucursalForm.reset();
  
  }

  guardarSucursal(): void{
      this.sucursal.nombreIdentificador = this.sucursalForm.get("nombre").value;
      this.sucursal.direccion = this.sucursalForm.get("direccion").value;
      this.sucursal.telefono = this.sucursalForm.get("telefono").value;
      this.sucursal.celular = this.sucursalForm.get("celular").value;
      this.sucursal.horaInicio = this.sucursalForm.get("horaInicio").value;
      this.sucursal.horaFin = this.sucursalForm.get("horaFin").value;


      this.sucursalService.crearSucursal(this.sucursal,"607a7636b1491f42a1434eaf").subscribe(data=>{
        this.datoSucursal=data;
        console.log(data);
      }, err=> {
        console.log(err);
      });
  }


  get nombre(){return this.sucursalForm.get('nombre')};
  get direccion(){return this.sucursalForm.get('direccion')};
  get telefono(){return this.sucursalForm.get('telefono')};
  get celular(){return this.sucursalForm.get('celular')};
  get horaInicio(){return this.sucursalForm.get('horaInicio')};
  get horaFin(){return this.sucursalForm.get('horaFin')};

}
