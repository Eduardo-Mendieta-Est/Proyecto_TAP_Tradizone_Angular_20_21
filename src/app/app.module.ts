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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }