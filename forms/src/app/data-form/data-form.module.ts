import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataFormComponent} from "./data-form.component";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [DataFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    SharedModule
  ],
  exports: [DataFormComponent]
})
export class DataFormModule { }
