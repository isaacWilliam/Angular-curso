import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgPrimeModule} from "./shared/ng-prime.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import {FormsModule} from "@angular/forms";
import {TemplateFormModule} from "./template-form/template-form.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPrimeModule,
    TemplateFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
