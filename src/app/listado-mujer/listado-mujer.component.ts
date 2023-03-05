import { Component } from '@angular/core';
import { ArticuloSimple } from '../interface/articulo.interface';
import { ArticulosServiceService } from '../service/articulos-service.service';

@Component({
  selector: 'app-listado-mujer',
  templateUrl: './listado-mujer.component.html',
  styleUrls: ['./listado-mujer.component.css']
})
export class ListadoMujerComponent {

  articulosMujer!: ArticuloSimple[];

  constructor (private articulosService: ArticulosServiceService){}

  ngOnInit():void {
    this.articulosMujer = this.articulosService.getAll(0);
  }

}
