import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {authGuard, AuthGuard, canMatchTeam} from "./auth/auth.guard";
import {AlunosGuard} from "./auth/alunos.guard";
import {PaginaNaoEncontradaComponent} from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cursos',
    loadChildren: () => import('../app/cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [
      // AuthGuard,
      authGuard
    ],
    // canMatch: [canMatchTeam]
  },
  {
    path: 'alunos',
    loadChildren: () => import('../app/alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [
      // AuthGuard,
      authGuard
    ],
    // canMatch: [canMatchTeam]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [
      // AuthGuard,
      authGuard
    ],
    // canMatch: [canMatchTeam]
  },
  //todo Deixar a rota vazia e rotas não encontradas por baixo na hora de declarar
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
