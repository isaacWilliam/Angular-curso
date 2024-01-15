import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosModule} from "./cursos/cursos.module";
import {AppComponent} from "./app.component";
import {UnsubscribeModule} from "./unsubscribe/unsubscribe.module";
import {UploadFileModule} from "./upload-file/upload-file.module";
import {BuscaModule} from "./busca/busca.module";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'cursos'
  },
  {
    path: 'cursos',
    loadChildren: () => CursosModule,
  },
  {
    path: 'upload',
    loadChildren: () => UploadFileModule,
  },
  {
    path: 'unsub',
    loadChildren: () => UnsubscribeModule,
  },
  {
    path: 'busca',
    loadChildren: () => BuscaModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
