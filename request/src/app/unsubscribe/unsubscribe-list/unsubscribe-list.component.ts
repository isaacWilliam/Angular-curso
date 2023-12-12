import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-unsubscribe-list',
  templateUrl: './unsubscribe-list.component.html',
  styleUrls: ['./unsubscribe-list.component.scss'],
  preserveWhitespaces: true
})

export class UnsubscribeListComponent implements OnInit{

  mostrarCampos = true;

  ngOnInit() {
  }

  emitirValor(valor: string){

  }

  mudarVisualizacaoComponents(){
    this.mostrarCampos = !this.mostrarCampos;
  }

}
