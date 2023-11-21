import {NgModule} from "@angular/core";
import {TabMenuModule} from "primeng/tabmenu";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";

const primeNg = [
  InputTextModule,
  TabMenuModule,
  ButtonModule,
  PasswordModule
]

@NgModule({
  imports: [...primeNg, CommonModule],
  exports: [...primeNg]
})

export class PrimeNgModule {}
