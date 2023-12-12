import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnsubscribeListComponent} from "./unsubscribe-list/unsubscribe-list.component";

const routes: Routes = [
  {
    path: '',
    component: UnsubscribeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsubscribeRoutingModule { }
