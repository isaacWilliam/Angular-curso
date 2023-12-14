import {Component, OnDestroy, OnInit} from "@angular/core";
import {EnviarValorService} from "../enviar-valor.service";
import {Observable, Subject, Subscription, takeUntil, tap} from "rxjs";


@Component({
  selector: 'app-until-take-component',
  template: '<app-base-component [title]="nome" estilo="bg-blue-500" [valor]="valor"></app-base-component>'
})

export class PocUntilTakeComponent implements OnInit, OnDestroy{

  valor: string = '';
  nome: string = 'Poc Until Take Component';
  sub = new Subject();

  constructor(
    private enviarValor: EnviarValorService
  ) {}

  ngOnInit() {
    this.enviarValor.getValor().pipe(
      tap(value => console.log(this.nome, value)),
      //todo Espera uma notificação de um Obsevable então criamos um Subjetct para emitir esse valor de notificação
      takeUntil(this.sub)
    ).subscribe(novo => this.valor = novo);
  }

  ngOnDestroy(){
    this.sub.next('');
    this.sub.complete();
    console.log(`O ${this.nome} foi destruído`);
  }

}
