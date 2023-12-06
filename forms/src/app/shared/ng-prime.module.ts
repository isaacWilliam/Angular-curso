import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {TabMenuModule} from "primeng/tabmenu";
import {InputTextModule} from "primeng/inputtext";
import {AutoCompleteModule} from "primeng/autocomplete";
import {MultiSelectModule} from "primeng/multiselect";
import {RadioButtonModule} from "primeng/radiobutton";
import {CheckboxModule} from "primeng/checkbox";

const ngPrime = [
    ButtonModule,
    TabMenuModule,
    InputTextModule,
    AutoCompleteModule,
    MultiSelectModule,
    RadioButtonModule,
    CheckboxModule
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
