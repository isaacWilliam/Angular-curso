import {Component, OnDestroy, OnInit} from "@angular/core";
import {EnviarValorService} from "../enviar-valor.service";
import {tap} from "rxjs";


@Component({
  selector: 'app-poc-component',
  template: '<app-base-component [title]="nome" estilo="bg-red-500" [valor]="valor"></app-base-component>'
})

export class PocComponent implements OnInit, OnDestroy{

  valor: string = '';
  nome: string = 'Poc Component'

  constructor(
    private enviarValor: EnviarValorService
  ) {}

  ngOnInit() {
    this.enviarValor.getValor().pipe(
      tap(value => console.log(this.nome, value))
    ).subscribe(novoValor => this.valor = novoValor)
  }

  ngOnDestroy(){
    console.log(`O ${this.nome} foi destruído`)
  }

}
