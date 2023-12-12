import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {TabMenuModule} from "primeng/tabmenu";

const primeNg = [
  ButtonModule,
  TabMenuModule
]

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    primeNg
  ]
})

export class PrimeNgModule {}
