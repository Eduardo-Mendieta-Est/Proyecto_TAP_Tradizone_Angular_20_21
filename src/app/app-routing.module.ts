import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/extras/home/home.component';
import { RegistroRestaurantesComponent } from './components/pages/restaurantes/registro-restaurantes/registro-restaurantes.component';
import { RegistroUsuariosComponent } from './components/pages/usuarios/registro-usuarios/registro-usuarios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'restaurante-registro', component: RegistroRestaurantesComponent },
  { path: 'usuario-registro', component: RegistroUsuariosComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
