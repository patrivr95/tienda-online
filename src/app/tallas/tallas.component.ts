import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../interface/articulo.interface';
import { ArticulosServiceService } from '../service/articulos-service.service';

@Component({
  selector: 'app-tallas',
  templateUrl: './tallas.component.html',
  styleUrls: ['./tallas.component.css']
})
export class TallasComponent {
  tallas!: string[] | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private articulosService: ArticulosServiceService){}

  ngOnInit():void {
    this.activateRoute.parent?.params.subscribe(param => {
      const descripcion = param['descripcion'].split('-');
      const id = descripcion[descripcion.length - 1];
      const articulo: Articulo | undefined = this.articulosService.getByID(parseInt(id));
      this.tallas = articulo?.tallas;
    })
  }

}
