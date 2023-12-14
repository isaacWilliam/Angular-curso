import {Component, OnInit} from '@angular/core';
import {EnviarValorService} from "../enviar-valor.service";

@Component({
  selector: 'app-unsubscribe-list',
  templateUrl: './unsubscribe-list.component.html',
  styleUrls: ['./unsubscribe-list.component.scss'],
  preserveWhitespaces: true
})

export class UnsubscribeListComponent implements OnInit{

  mostrarCampos = true;
  constructor(
    private service: EnviarValorService
  ) {}
  ngOnInit() {
  }

  emitirValor(valor: string){
    this.service.emitirValor(valor);
  }

  mudarVisualizacaoComponents(){
    this.mostrarCampos = !this.mostrarCampos;
  }

}
