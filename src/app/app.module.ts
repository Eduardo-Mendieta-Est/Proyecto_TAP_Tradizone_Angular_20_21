import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './components/shared/menu-principal/menu-principal.component';
import { RegistroUsuariosComponent } from './components/pages/usuarios/registro-usuarios/registro-usuarios.component';
import { ConfiguracionCuentaComponent } from './components/pages/usuarios/configuracion-cuenta/configuracion-cuenta.component';
import { RegistroRestaurantesComponent } from './components/pages/restaurantes/registro-restaurantes/registro-restaurantes.component';
import { CatalogoRestaurantesComponent } from './components/pages/restaurantes/catalogo-restaurantes/catalogo-restaurantes.component';
import { CatalogoPlatosComponent } from './components/pages/platos/catalogo-platos/catalogo-platos.component';
import { EventosComponent } from './components/pages/extras/eventos/eventos.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HomeComponent } from './components/pages/extras/home/home.component';

/** ----------------- Formularios Reactivos ----------------- */
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioSucursalComponent } from './components/pages/restaurantes/formulario-sucursal/formulario-sucursal.component';
import { FormularioPlatoComponent } from './components/pages/platos/formulario-plato/formulario-plato.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    RegistroUsuariosComponent,
    ConfiguracionCuentaComponent,
    RegistroRestaurantesComponent,
    CatalogoRestaurantesComponent,
    CatalogoPlatosComponent,
    EventosComponent,
    LoginComponent,
    HomeComponent,
    FormularioSucursalComponent,
    FormularioPlatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
