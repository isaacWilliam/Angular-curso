import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {TabMenuModule} from "primeng/tabmenu";
import {TableModule} from "primeng/table";
import {SkeletonModule} from "primeng/skeleton";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {InputTextModule} from "primeng/inputtext";
import {FieldsetModule} from "primeng/fieldset";

const primeNg = [
  ButtonModule,
  TabMenuModule,
  TableModule,
  SkeletonModule,
  ProgressSpinnerModule,
  InputTextModule,
  FieldsetModule
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
