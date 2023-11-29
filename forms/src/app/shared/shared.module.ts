import {NgModule} from "@angular/core";
import {NgPrimeModule} from "./ng-prime.module";
import {CommonModule} from "@angular/common";
import {FormTestComponent} from "./form-test/form-test.component";
import {FormErrorComponent} from "./form-error/form-error.component";

@NgModule({
  declarations: [
    FormTestComponent,
    FormErrorComponent
  ],
  imports: [
    NgPrimeModule,
    CommonModule,
  ],
  exports: [
    NgPrimeModule,
    FormTestComponent,
    FormErrorComponent
  ]
})

export class SharedModule {}
