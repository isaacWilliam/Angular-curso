import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Estados} from "../shared/models/estados";
import {AutoCompleteCompleteEvent} from "primeng/autocomplete";
import {ConsultaCepService} from "../shared/services/consulta-cep.service";
import {Estado} from "./model/estado";
import {Observable} from "rxjs";
import {GenericService} from "../shared/services/generic.service";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})

export class DataFormComponent implements OnInit{

  form: FormGroup;
  estados = Estados;
  // estados : Observable<Estado[]>;
  filtrados: any[] = [];
  letter: {name: string, key: number}[];
  frame: any[] = []

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private consultaCep: ConsultaCepService,
    private generic: GenericService
  ) {}

  ngOnInit(){
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    // })
    // this.estados = this.consultaCep.getEstado();
    this.frame = this.generic.getFramework();
    this.letter = this.generic.getNewsLetter();
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
        endereco: this.formBuilder.group({
          rua: [null, [Validators.required]],
          numero: [null, [Validators.required]],
          bairro: [null, [Validators.required]],
          cidade: [null, [Validators.required]],
          complemento: [null],
          cep: [null, [Validators.required]],
          uf: [<object | null>null, [Validators.required]],
          ufSelectBox: [<Estado[] | null>null, [Validators.required]]
      }),
        newsLetter: [0 , [Validators.required]],
        framework: this.buildFramework(),
    })
  }

  buildFramework(){
      const values = this.frame.map(v => new FormControl(false));
      console.log(values)
       return this.formBuilder.array(values);
  }

  get framework(): FormArray {
    return this.form.controls["framework"] as FormArray;
  }

  resetForm(){
    this.form.reset();
  }

  onSubmit(form: FormGroup){
    if (form.valid){
      console.log(this.form.value);
      this.http.post('http://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(
        response => {
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
        this.consultaCep.getCep(value).subscribe( (response: any) => {
           this.vincularDados(response);
        })
      }
    }
  }

  vincularDados(response: any){
    // this.filtrarEstados(undefined, response.uf);
    this.form.patchValue({
      endereco: {
        rua: response.logradouro,
        bairro: response.bairro,
        cidade: response.localidade,
        complemento: response.complemento,
        uf: response.uf
      }
    })
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

  filtrarEstados(event?: AutoCompleteCompleteEvent, uf?: string) {
    let filtered: any[] = [];
    this.estados.forEach((item: any) => {
      let estado = item;
      if (uf && estado.sigla.toLowerCase().indexOf(uf.toLowerCase()) == 0){
        filtered.push(estado);
      }
      if (event && estado.sigla.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        filtered.push(estado.sigla);
      }
      this.filtrados = filtered;
    })
  }

}
