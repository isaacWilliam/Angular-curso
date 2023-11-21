import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AlunosModule} from "./alunos/alunos.module";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
// import {AlunosGuard} from "./auth/alunos.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    AlunosModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    AuthGuard,
    // AlunosGuard
  ]
})
export class AppModule { }
