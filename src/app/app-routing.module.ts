import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { Error404Component } from './error404/error404.component';
import { ListadoHombreComponent } from './listado-hombre/listado-hombre.component';
import { ListadoMujerComponent } from './listado-mujer/listado-mujer.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { TallasComponent } from './tallas/tallas.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'hombre'},
  {path: 'hombre', component: ListadoHombreComponent},
  {path: 'mujer', component: ListadoMujerComponent},
  {path: 'articulo/:descripcion', component: DetalleComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'tallas'},
    {path: 'opiniones', component: OpinionesComponent},
    {path: 'tallas', component: TallasComponent}
  ]},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
