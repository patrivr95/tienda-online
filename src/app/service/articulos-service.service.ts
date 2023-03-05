import { Injectable } from '@angular/core';
import { listadoArticulos } from '../bd/productos-ropa';
import { Articulo } from '../interface/articulo.interface.js';

@Injectable({
  providedIn: 'root'
})
export class ArticulosServiceService {

  articulo!: Articulo;
  
   getAll(genero: number){
    return listadoArticulos.filter(articulo => articulo.gender === genero || articulo.gender === 2).map(articulo => {
      return {
        id: articulo.id,
        name: articulo.name,
        img: articulo.img,
        price: articulo.price
      }
    });
   }

   getByID(id: number){
    return listadoArticulos.find(articulo => articulo.id === id)
   }
}
