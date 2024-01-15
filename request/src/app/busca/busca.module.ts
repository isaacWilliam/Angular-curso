import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaRoutingModule } from './busca-routing.module';
import { BuscaComponent } from './busca.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BuscaComponent
  ],
  imports: [
    CommonModule,
    BuscaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BuscaModule { }
