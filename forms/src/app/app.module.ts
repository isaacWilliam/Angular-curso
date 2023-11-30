import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgPrimeModule} from "./shared/ng-prime.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TemplateFormModule} from "./template-form/template-form.module";
import {HttpClientModule} from "@angular/common/http";
import {DataFormModule} from "./data-form/data-form.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgPrimeModule,
    TemplateFormModule,
    DataFormModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
