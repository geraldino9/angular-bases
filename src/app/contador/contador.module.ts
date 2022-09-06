import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations:[ // estos son los componentes que voy a utilziar
    ContadorComponent
  ],
  exports:[//estos son los componentes que estaran disponibles/visibles par visualizacion
  ContadorComponent
  ],
  imports:[//aqui van solo modulos
    CommonModule
  ]
})
export class ContadorModule{

}
