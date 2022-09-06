import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <span>La base: {{ base }}</span>
    <br />
    <button (click)="acomular(base)">+{{ base }}</button>
    <span>{{ numero }} </span>
    <button (click)="acomular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo:string = 'Contador App';
  numero: number = 0;
  base:number = 5;

acomular(valor: number){
  this.numero+=valor;
}
}
