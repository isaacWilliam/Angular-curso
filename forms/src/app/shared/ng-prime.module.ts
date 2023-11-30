import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {TabMenuModule} from "primeng/tabmenu";
import {InputTextModule} from "primeng/inputtext";
import {AutoCompleteModule} from "primeng/autocomplete";

const ngPrime = [
  ButtonModule,
  TabMenuModule,
  InputTextModule,
  AutoCompleteModule
]

@NgModule({
  imports: [
    CommonModule,
    ...ngPrime
  ],
  exports: [
    ...ngPrime
  ]
})

export class NgPrimeModule {}
