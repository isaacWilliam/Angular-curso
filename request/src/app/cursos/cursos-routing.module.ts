import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from "./cursos.component";
import {FormCursosComponent} from "./form-cursos/form-cursos.component";

const routes: Routes = [
  {
    path: '',
    component: CursosComponent
  },
  {
    path: 'novo',
    component: FormCursosComponent
  },
  {
    path: 'editar/:id',
    component: FormCursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
