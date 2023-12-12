import {NgModule} from "@angular/core";
import {NgPrimeModule} from "./ng-prime.module";
import {CommonModule} from "@angular/common";
import {FormTestComponent} from "./form-test/form-test.component";
import {FormErrorComponent} from "./form-error/form-error.component";
import {HttpClientJsonpModule} from "@angular/common/http";
import {InputFieldComponent} from "./input-field/input-field.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FormTestComponent,
    FormErrorComponent,
    InputFieldComponent,
  ],
  imports: [
    NgPrimeModule,
    CommonModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NgPrimeModule,
    FormTestComponent,
    FormErrorComponent,
    InputFieldComponent,
  ],
  providers: []
})

export class SharedModule {}
