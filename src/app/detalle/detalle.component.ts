import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../interface/articulo.interface';
import { ArticulosServiceService } from '../service/articulos-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  articuloCompleto!: Articulo;
  urlDescripcionArticulo: string = '';

  constructor(private activateRoute: ActivatedRoute,
    private articuloService: ArticulosServiceService,
    private router: Router){}
  

  ngOnInit():void {
    this.activateRoute.params.subscribe(param => {
      // Guardamos la parte de la url correspondiente al artículo para luego usarla en el redirect de tallas y opiniones
      this.urlDescripcionArticulo = param['descripcion'];
      const descripcion = param['descripcion'].split('-');
      const id = descripcion[descripcion.length - 1];
      const response = this.articuloService.getByID(parseInt(id))
      if(response){
        this.articuloCompleto = response;
      }
    })
  }


  volver(){
    if(this.articuloCompleto.gender === 0){
      this.router.navigate(['/mujer']);
    } else {
      this.router.navigate(['/hombre']);
    }

  }

  goToTallas(){
    this.router.navigate(['/articulo/', this.urlDescripcionArticulo, 'tallas'])
  }

  goToOpiniones(){
    this.router.navigate(['/articulo/', this.urlDescripcionArticulo, 'opiniones'])
  }
}
