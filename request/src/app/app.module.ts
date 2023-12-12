import {LOCALE_ID, DEFAULT_CURRENCY_CODE , NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";

//todo Para adicionar o locale certo para aplicação
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    //todo Usado para configurar os Dates e Currency
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
