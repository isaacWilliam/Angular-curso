import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {TabMenuModule} from "primeng/tabmenu";

const ngPrime = [
  ButtonModule,
  TabMenuModule
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
