import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opinion } from '../interfaces/opinion.interface';
import { OpinionesService } from '../service/opiniones.service';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent {
  opiniones!: Opinion[];

  constructor(private opinionesService: OpinionesService,
    private activateRoute: ActivatedRoute){}

  ngOnInit():void {
    this.activateRoute.parent?.params.subscribe(param => {
      const descripcion = param['descripcion'].split('-');
      const id = descripcion[descripcion.length - 1];
      this.opiniones = this.opinionesService.getOpinionByArticulo(parseInt(id))
    })
    /* this.opiniones = this.opinionesService.getOpinionByArticulo(????) */
  }

}
