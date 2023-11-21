import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {AlunosGuard} from "./auth/alunos.guard";
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('../app/cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('../app/alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
