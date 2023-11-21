import {NgModule} from "@angular/core";
import {CursosComponent} from "./cursos.component";
import {CursoDetalheComponent} from "./curso-detalhe/curso-detalhe.component";
import {CommonModule} from "@angular/common";
import {CursosService} from "./cursos.service";
import {CursosRoutingModule} from "./curso-detalhe/cursos.routing.module";

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [CommonModule, CursosRoutingModule],
  providers: [CursosService]
})

export class CursosModule {}
