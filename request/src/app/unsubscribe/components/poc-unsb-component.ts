import {Component, OnDestroy, OnInit} from "@angular/core";
import {EnviarValorService} from "../enviar-valor.service";
import {Observable, Subscription, tap} from "rxjs";


@Component({
  selector: 'app-unsub-component',
  template: '<app-base-component [title]="nome" estilo="bg-gray-500" [valor]="valor"></app-base-component>'
})

export class PocUnsbComponent implements OnInit, OnDestroy{

  valor = '';
  nome: string = 'Poc Unsubscribe Component';
  //todo Nesse caso o Subcription pode ser um array ou receber apenas um valor
  //sub = new Subscription();
  sub: Subscription[] = []

  constructor(
    private enviarValor: EnviarValorService
  ) {}

  ngOnInit() {
    this.sub.push(this.enviarValor.getValor().pipe(
      tap(value => console.log(this.nome, value))
    ).subscribe(novoValor => this.valor = novoValor))
  }

  ngOnDestroy(){
    // this.sub.unsubscribe();
    this.sub.forEach(sub => sub.unsubscribe());
    console.log(`O ${this.nome} foi destruído`)
  }
}
