import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormValidators} from "../form-validators";

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent{

  @Input() form: any;
  @Input() title: string;
  @Output() calback: EventEmitter<any> = new EventEmitter<any>();

  // getError(erro: any): any{
  //   if(erro){
  //     this.calback.emit(true)
  //     if(erro.required){
  //       return `${this.title} é obrigatório!`
  //     }else if(erro.email){
  //       return `${this.title} é inválido!`
  //     }else if(erro.emailInvalido){
  //       return `${this.title} já existe!`
  //     }else if(erro.cepInvalido){
  //       return `${this.title} é inválido!`
  //     }else if(erro.camposDiferentes){
  //       return `Os e-mails não são iguais!`
  //     }
  //   }
  // }

  @Input() control: any;

  //todo Nesse tipo de método get não podemos atribuir valor mas podemos retornar
  get errorMsg():string | null{
    for (let controlKey in this.control.errors) {
      if(this.control.errors.hasOwnProperty(controlKey) && this.control.touched){
        return FormValidators.mensagemErro(this.title, controlKey, this.control.errors[controlKey]);
      }
    }

    return null;
  }

}
