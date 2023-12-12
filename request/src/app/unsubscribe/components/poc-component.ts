import {Component} from "@angular/core";


@Component({
  selector: 'app-poc-component',
  template: '<app-base-component title="Poc Component" estilo="bg-red-300" [valor]=""></app-base-component>'
})

export class PocComponent {
  valor: string = '';
}
