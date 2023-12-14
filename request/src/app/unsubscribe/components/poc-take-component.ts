import {Component, OnDestroy, OnInit} from "@angular/core";
import {EnviarValorService} from "../enviar-valor.service";
import {take, tap} from "rxjs";


@Component({
  selector: 'app-take-component',
  template: '<app-base-component [title]="nome" estilo="bg-yellow-500" [valor]="valor"></app-base-component>'
})

export class PocTakeComponent implements OnInit, OnDestroy {

  valor: string = '';
  nome: string = 'Poc Take Component';

  constructor(
    private enviarValor: EnviarValorService
  ) {}

  ngOnInit() {
    this.enviarValor.getValor().pipe(
      tap(value => console.log(this.nome, value)),
      //todo Nesse caso o take pede quantas vezes vc deseja escutar essa requisição
      take(1)
    ).subscribe(novo => this.valor = novo);
  }

  ngOnDestroy(){
    console.log(`O ${this.nome} foi destruído`);
  }

}
