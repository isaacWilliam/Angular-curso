import {NgModule} from "@angular/core";
import {PrimeNgModule} from "./pime-ng.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [PrimeNgModule, CommonModule],
  exports: [PrimeNgModule]
})

export class SharedModule {}
