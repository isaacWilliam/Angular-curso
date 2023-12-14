import {Component, OnDestroy, OnInit} from "@angular/core";
import {EnviarValorService} from "../enviar-valor.service";
import {Observable, tap} from "rxjs";


@Component({
  selector: 'app-async-component',
  template: '<app-base-component [title]="nome" estilo="bg-green-500" [valor]="valor$ | async"></app-base-component>'
})

export class PocAsyncComponent implements OnInit, OnDestroy{

  valor$: Observable<string> = new Observable<string>;
  nome: string = 'Poc Async Component'

  constructor(
    private enviarValor: EnviarValorService
  ) {}

  ngOnInit() {
    this.valor$ = this.enviarValor.getValor().pipe(
      tap(value => console.log(this.nome, value))
    )
  }

  ngOnDestroy(){
    console.log(`O ${this.nome} foi destruído`)
  }

}
