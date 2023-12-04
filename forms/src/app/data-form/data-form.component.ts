import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Estados} from "../shared/models/estados";
import {AutoCompleteCompleteEvent} from "primeng/autocomplete";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit{

  form: FormGroup;
  estados = Estados;
  filtrados: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(){
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    // })
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      endereco: this.formBuilder.group({
        rua: [null, Validators.required],
        numero: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        complemento: [null],
        cep: [null, Validators.required],
        uf: [null, Validators.required],
      })
    })
  }

  resetForm(){
    this.form.reset();
  }

  onSubmit(form: FormGroup){
    if (form.valid){
      this.http.post('http://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(
        response => {
          console.log(response);
          this.resetForm();
        },
        error => alert('Deu Erro'),
      )
    }else{
      this.verificaValidForm(this.form);
    }
  }

  getClass(form: any){
    return !!(form.errors && form.touched);
  }

  getApiViaCep(value: any){
    if(value){
      value = value.replace(/\D/g, '');
      let validaCep = /^[0-9]{8}$/
      if(validaCep.test(value)){
        this.http.get("https://viacep.com.br/ws/"+ value +"/json").subscribe( (response: any) => {
          this.filtrarEstadosPorUf(response.uf);
           this.form.patchValue({
             endereco: {
               rua: response.logradouro,
               bairro: response.bairro,
               cidade: response.localidade,
               complemento: response.complemento,
             }
           })
        })
      }
    }
  }

  verificaValidForm(form: FormGroup){
    Object.keys(form.controls).forEach(valor => {
      let input = form.get(valor);
      input?.markAsTouched();
      if(input instanceof FormGroup){
        this.verificaValidForm(input)
      }
    })
  }

  filtrarEstados(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;
    this.estados.forEach(item => {
      let estado = item
      if (estado.sigla.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(estado);
      }
      this.filtrados = filtered;
    })
  }

  filtrarEstadosPorUf(uf: string) {
    let filtered: any[] = [];
    this.estados.forEach(item => {
      let estado = item
      if (estado.sigla.toLowerCase().indexOf(uf.toLowerCase()) == 0) {
        filtered.push(estado);
      }
      this.filtrados = filtered;
    })
  }

}
