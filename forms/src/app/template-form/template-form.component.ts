import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  // usuario = {
  //   nome: 'Estevão',
  //   email: 'estev@gmail.com'
  // }
  usuario = {
    nome: '',
    email: '',
    cep: '',
    rua: '',
    numero: null,
    bairro: '',
    uf: '',
    cidade: '',
    complemento: ''
  }
  onSubmit(form?: any){
    console.log(form)
  }
}
