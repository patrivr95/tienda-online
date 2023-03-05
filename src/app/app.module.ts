import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FichaComponent } from './ficha/ficha.component';
import { ListadoHombreComponent } from './listado-hombre/listado-hombre.component';
import { ListadoMujerComponent } from './listado-mujer/listado-mujer.component';
import { DetalleComponent } from './detalle/detalle.component';
import { Error404Component } from './error404/error404.component';
import { TallasComponent } from './tallas/tallas.component';
import { OpinionesComponent } from './opiniones/opiniones.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FichaComponent,
    ListadoHombreComponent,
    ListadoMujerComponent,
    DetalleComponent,
    Error404Component,
    TallasComponent,
    OpinionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
