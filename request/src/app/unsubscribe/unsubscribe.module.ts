import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeRoutingModule } from './unsubscribe-routing.module';
import { UnsubscribeListComponent } from './unsubscribe-list/unsubscribe-list.component';
import {SharedModule} from "../shared/shared.module";
import { BaseComponentComponent } from './base-component/base-component.component';
import {PocComponent} from "./components/poc-component";


@NgModule({
  declarations: [
    UnsubscribeListComponent,
    BaseComponentComponent,
    PocComponent
  ],
  imports: [
    CommonModule,
    UnsubscribeRoutingModule,
    SharedModule
  ]
})
export class UnsubscribeModule { }
