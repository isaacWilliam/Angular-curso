import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TemplateFormComponent} from "./template-form/template-form.component";
import {DataFormComponent} from "./data-form/data-form.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
