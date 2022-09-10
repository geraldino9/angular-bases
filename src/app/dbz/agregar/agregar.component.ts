import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  // styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  //propiedades
  @Input() nuevo: Personaje = { nombre: '', poder: 0 };
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  //getters and setters

  // constructores
  constructor(private dbzService: DbzService) {}
  ngOnInit(): void {}

  //metodos
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
  }
}
