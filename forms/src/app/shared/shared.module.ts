import {NgModule} from "@angular/core";
import {NgPrimeModule} from "./ng-prime.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    NgPrimeModule,
    CommonModule,
  ],
  exports: [NgPrimeModule]
})

export class SharedModule {}
