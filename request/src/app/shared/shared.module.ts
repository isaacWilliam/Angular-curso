import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PrimeNgModule} from "./prime-ng.module";
import {ToastComponent} from "./toast/toast.component";
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModalComponent} from "./confirm-dialog-modal/confirm-dialog-modal.component";

@NgModule({
  declarations: [
    ToastComponent,
    ConfirmDialogModalComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    PrimeNgModule,
    ToastComponent,
    ConfirmDialogModalComponent
  ],
  providers: [ConfirmationService]
})

export class SharedModule {}
