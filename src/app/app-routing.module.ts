import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/extras/home/home.component';
import { FormularioPlatoComponent } from './components/pages/platos/formulario-plato/formulario-plato.component';
import { FormularioSucursalComponent } from './components/pages/restaurantes/formulario-sucursal/formulario-sucursal.component';
import { RegistroRestaurantesComponent } from './components/pages/restaurantes/registro-restaurantes/registro-restaurantes.component';
import { RegistroUsuariosComponent } from './components/pages/usuarios/registro-usuarios/registro-usuarios.component';
import { LoginComponent } from './components/shared/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario-registro', component: RegistroUsuariosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'restaurante-registro', component: RegistroRestaurantesComponent },
  { path: 'sucursal-registro', component: FormularioSucursalComponent},
  { path: 'plato-registro', component: FormularioPlatoComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
