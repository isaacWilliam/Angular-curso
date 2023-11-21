import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Usuario} from "./Usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  constructor(
    private authService: AuthService,
  ) {}

  fazerLogin(){
    this.authService.login(this.usuario);
  }

}
