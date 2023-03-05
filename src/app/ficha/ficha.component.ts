import { Component, Input } from '@angular/core';
import { isThisTypeNode } from 'typescript';
import { Articulo, ArticuloSimple } from '../interface/articulo.interface';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent {
  @Input() articulo!: ArticuloSimple;

  url: string = '';

  constructor(){ }

  ngOnInit():void {
    this.url = this.articulo.name.split(' ').join('-') + '-' + this.articulo.id;
  }

}
