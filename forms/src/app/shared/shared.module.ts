import {NgModule} from "@angular/core";
import {NgPrimeModule} from "./ng-prime.module";
import {CommonModule} from "@angular/common";
import {FormTestComponent} from "./form-test/form-test.component";
import {FormErrorComponent} from "./form-error/form-error.component";
import {HttpClientJsonpModule} from "@angular/common/http";

@NgModule({
  declarations: [
    FormTestComponent,
    FormErrorComponent
  ],
  imports: [
    NgPrimeModule,
    CommonModule,
    HttpClientJsonpModule
  ],
  exports: [
    NgPrimeModule,
    FormTestComponent,
    FormErrorComponent
  ],
  providers: []
})

export class SharedModule {}
