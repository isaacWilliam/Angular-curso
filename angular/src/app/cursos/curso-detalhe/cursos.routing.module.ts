import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from "../cursos.component";
import {CursoDetalheComponent} from "./curso-detalhe.component";

const cursosRoutes: Routes = [
  {
    path: '',
    component: CursosComponent
  },
  {
    path: ':id',
    component: CursoDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
