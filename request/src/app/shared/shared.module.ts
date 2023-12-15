import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PrimeNgModule} from "./prime-ng.module";
import {ToastComponent} from "./toast/toast.component";
import {MessageLayoutService} from "./services/message.layout.service";

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    PrimeNgModule,
    ToastComponent,
  ]
})

export class SharedModule {}
