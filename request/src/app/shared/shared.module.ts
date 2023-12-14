import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PrimeNgModule} from "./prime-ng.module";
import {MessageLayoutService} from "./services/message.layout.service";
import {ToastComponent} from "./toast/toast.component";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    PrimeNgModule,
  ],
  providers: [
    MessageLayoutService,
    MessageService
  ]
})

export class SharedModule {}
