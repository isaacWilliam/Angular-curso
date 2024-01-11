import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from "./cursos.component";
import {FormCursosComponent} from "./form-cursos/form-cursos.component";
import {cursoResolverResolver} from "./guards/curso-resolver.resolver";

const routes: Routes = [
  {
    path: '',
    component: CursosComponent
  },
  {
    path: 'novo',
    component: FormCursosComponent,
    resolve: {
      curso: cursoResolverResolver
    }
  },
  {
    path: 'editar/:id',
    component: FormCursosComponent,
    resolve: {
      curso: cursoResolverResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
