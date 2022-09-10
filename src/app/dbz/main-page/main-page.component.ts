import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  //injeccion de dependencias aplicada en este constructor
  constructor(private dbzService: DbzService) {}
  ngOnInit(): void {}
  //valor por defecto
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1110,
  };

  get personajes(){
    return this.dbzService.personajes;
  }



}
