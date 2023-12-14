import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeRoutingModule } from './unsubscribe-routing.module';
import { UnsubscribeListComponent } from './unsubscribe-list/unsubscribe-list.component';
import {SharedModule} from "../shared/shared.module";
import { BaseComponentComponent } from './base-component/base-component.component';
import {PocComponent} from "./components/poc-component";
import {PocAsyncComponent} from "./components/poc-async-component";
import {PocUnsbComponent} from "./components/poc-unsb-component";
import {PocTakeComponent} from "./components/poc-take-component";
import {PocUntilTakeComponent} from "./components/poc-until-take-component";
import {EnviarValorService} from "./enviar-valor.service";


@NgModule({
  declarations: [
    UnsubscribeListComponent,
    BaseComponentComponent,
    PocComponent,
    PocAsyncComponent,
    PocUnsbComponent,
    PocTakeComponent,
    PocUntilTakeComponent
  ],
  imports: [
    CommonModule,
    UnsubscribeRoutingModule,
    SharedModule
  ],
  providers: [EnviarValorService]
})
export class UnsubscribeModule { }
