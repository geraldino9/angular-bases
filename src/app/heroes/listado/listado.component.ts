import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes:string []=['Spiderman', 'DeadPool', 'Wolverine'];
  heroeBorrado:string = '';

  borrarHeroe( index: number ):void{
    console.log("LLega a borra el elemento en la posicion ", index);
    //this.heroes = this.heroes.slice(index, this.heroes.length)
    this.heroeBorrado = this.heroes.shift() || '';

  }

  constructor() {
    console.log('constructor');

  }

  ngOnInit(): void {

    console.log('oninit');

  }

}
