import { Component } from '@angular/core';
import { Articulo, ArticuloSimple } from '../interface/articulo.interface';
import { ArticulosServiceService } from '../service/articulos-service.service';


@Component({
  selector: 'app-listado-hombre',
  templateUrl: './listado-hombre.component.html',
  styleUrls: ['./listado-hombre.component.css']
})
export class ListadoHombreComponent {
  articulosHombre!: ArticuloSimple[];

  constructor (private articulosService: ArticulosServiceService){}

  ngOnInit():void {
    this.articulosHombre = this.articulosService.getAll(1);
  }

}
