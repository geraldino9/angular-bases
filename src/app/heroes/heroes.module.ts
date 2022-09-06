import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from "@angular/common";




@NgModule({
  declarations:[ // estos son los componentes que voy a utilziar
    HeroeComponent,
    ListadoComponent,
  ],
  exports:[//estos son los componentes que estaran disponibles/visibles par visualizacion
  HeroeComponent,
  ListadoComponent
  ],
  imports:[//aqui van solo modulos
    CommonModule
  ]
})
export class HeroresModule{

}
