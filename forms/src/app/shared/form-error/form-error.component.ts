import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent{

  @Input() form: any;
  @Input() title: string;
  @Output() calback: EventEmitter<any> = new EventEmitter<any>();

  getError(erro: any): any{
    if(erro){
      this.calback.emit(true)
      if(erro.required){
        return `${this.title} é obrigatório!`
      }else if(erro.email){
        return `${this.title} é inválido!`
      }
    }
  }
}
