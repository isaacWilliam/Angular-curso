import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from "../login/Usuario";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  private autenticado: boolean = false;

  constructor(
    private router: Router
  ) { }

  login(usuario: Usuario){
    if(usuario.nome === 'Isaac' && usuario.senha === 'isaac123'){
      this.router.navigate(['/']);
      this.mostrarMenuEmitter.emit(true);
      this.autenticado = true;
    } else {
      this.mostrarMenuEmitter.emit(false);
      this.autenticado = false;
    }
  }

  getAutenticado(){
    return this.autenticado;
  }

  canMatch(): boolean {
    return this.autenticado;
  }

}
