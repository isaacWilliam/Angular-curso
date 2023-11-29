import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  constructor(
    private http: HttpClient
  ) {
  }

  // usuario = {
  //   nome: 'Estevão',
  //   email: 'estev@gmail.com'
  // }
  usuario = {
    nome: '',
    email: '',
    cep: '',
    logradouro: '',
    numero: null,
    bairro: '',
    uf: '',
    localidade: '',
    complemento: null
  }
  onSubmit(form?: any){
    console.log(form)
  }

  verificaErro(input: any){
   return input.touched && input.errors
  }

  getApiViaCep(value: any){
    console.log(value);
    value = value.replace(/\D/g, '');
    if(value){
      let validaCep = /^[0-9]{8}$/
      if(validaCep.test(value)){
        this.http.get("https://viacep.com.br/ws/"+ value +"/json").subscribe( (response: any) => {
          console.log(response);
            this.usuario.logradouro = response.logradouro;
            this.usuario.localidade = response.localidade;
            this.usuario.bairro = response.bairro;
            this.usuario.uf = response.uf;
            this.usuario.complemento = response.complemento;
        })
      }
    }
  }
}
