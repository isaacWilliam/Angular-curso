import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosModule} from "./cursos/cursos.module";
import {AppComponent} from "./app.component";
import {UnsubscribeModule} from "./unsubscribe/unsubscribe.module";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'cursos'
  },
  {
    path: 'cursos',
    loadChildren: () => CursosModule,
  },
  {
    path: 'unsub',
    loadChildren: () => UnsubscribeModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
