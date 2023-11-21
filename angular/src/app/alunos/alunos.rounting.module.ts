import {NgModule} from "@angular/core";
import {AlunosComponent} from "./alunos.component";
import {RouterModule, Routes} from "@angular/router";
import {AlunoFormComponent} from "./aluno-form/aluno-form.component";
import {AlunoDetalheComponent} from "./aluno-detalhe/aluno-detalhe.component";

const alunosRoutes: Routes = [
  // {
  //   path: 'alunos',
  //   component: AlunosComponent
  // },
  // {
  //   path: 'aluno/novo',
  //   component: AlunoFormComponent
  // },
  // {
  //   path: 'aluno/:id',
  //   component: AlunoDetalheComponent
  // },
  // {
  //   path: 'aluno/:id/editar',
  //   component: AlunoFormComponent
  // }
  // Caso queira que dois components sejam renderizados na tala da para declarar dessa forma abaixo
  // Para que funcione deve ser adicionado o router-outlet no component pai nesse caso no AlunosComponent.html
  {
    path: 'alunos',
    component: AlunosComponent,
    children: [
      {
        path: 'novo',
        component: AlunoFormComponent
      },
      {
        path: ':id',
        component: AlunoDetalheComponent
      },
      {
        path: ':id/editar',
        component: AlunoFormComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})

export class AlunosRountingModule {}
