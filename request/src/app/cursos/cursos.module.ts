import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import {SharedModule} from "../shared/shared.module";
import {CursosService} from "./cursos.service";
import { FormCursosComponent } from './form-cursos/form-cursos.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MessageLayoutService} from "../shared/services/message.layout.service";


@NgModule({
  declarations: [
    CursosComponent,
    FormCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [CursosService]
})
export class CursosModule { }
