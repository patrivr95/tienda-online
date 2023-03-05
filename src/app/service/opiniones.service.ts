import { Injectable } from '@angular/core';
import { opiniones } from '../bd/opiniones';

@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  constructor() { }

  getOpinionByArticulo(idArticulo: number){
    return opiniones.filter(opinion => opinion.idProduct === idArticulo);
  }
}
