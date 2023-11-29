import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplateFormComponent} from "./template-form.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [TemplateFormComponent]
})
export class TemplateFormModule { }
