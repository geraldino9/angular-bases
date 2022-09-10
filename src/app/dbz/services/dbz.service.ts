import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
  //propiedades
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegueta',
      poder: 8500,
    },
  ];

  //getters and setters
  get personajes(): Personaje[]{
    return [...this._personajes];
  }

  //constructores
  constructor(){
}


  //metodos
  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }


}
