import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { Plato } from 'src/app/models/plato';
import { CategoriaService } from 'src/app/services/categoria.service';
import { PlatoService } from 'src/app/services/plato.service';
import { Response } from 'src/app/util/Response';

@Component({
  selector: 'app-formulario-plato',
  templateUrl: './formulario-plato.component.html',
  styleUrls: ['./formulario-plato.component.css']
})
export class FormularioPlatoComponent implements OnInit {

  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;

  imagen: File;
  imagenMin: File;

  platoForm: FormGroup;
  plato= new Plato;

  datoPlato: Response<Plato>;
  categorias: Categoria[];
  respuesta: Response<Categoria>;

  constructor(private platoService: PlatoService, private categoriaService: CategoriaService) {
    this.platoForm = this.crearFormGroup();
   }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(data=>{
      this.respuesta = data;
      this.categorias = this.respuesta.listResponse;
      console.log(this.categorias.length);
    })
  }

  onFileChange(event){
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  guardarPlato(): void{
    this.plato.nombre = this.platoForm.get("nombre").value;
    this.plato.descripcion = this.platoForm.get("descripcion").value;
    this.plato.ingredientes = this.platoForm.get("ingredientes").value;
    this.plato.precio = this.platoForm.get("precio").value;
    this.plato.idCategoria = this.platoForm.get("categoria").value;

    console.log(this.plato)
    this.platoService.crearPlato(this.plato).subscribe(data=>{
      this.datoPlato=data;
      console.log(data)
    }, err =>{
      console.log(err)
    });
  }

  crearFormGroup(): FormGroup{
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      ingredientes: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required)
    });
  }

  resetearFormulario(): void{
    this.platoForm.reset();
  }


  get nombre(){return this.platoForm.get('nombre')};
  get descripcion(){return this.platoForm.get('descripcion')};
  get ingredientes(){return this.platoForm.get('ingredientes')};
  get precio(){return this.platoForm.get('precio')};
  get categoria(){return this.platoForm.get('categoria')}

}
