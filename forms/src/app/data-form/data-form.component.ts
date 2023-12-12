import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Estados} from "../shared/models/estados";
import {AutoCompleteCompleteEvent} from "primeng/autocomplete";
import {ConsultaCepService} from "../shared/services/consulta-cep.service";
import {Estado} from "./model/estado";
import {GenericService} from "../shared/services/generic.service";
import {FormValidators} from "../shared/form-validators";
import {VerificaEmailService} from "./service/verifica-email.service";
import {distinctUntilChanged, empty, map, Observable, switchMap, tap} from "rxjs";
import {BaseFormComponent} from "../shared/base-form/base-form.component";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})

export class DataFormComponent extends BaseFormComponent implements OnInit{

  // form: FormGroup;
  estados = Estados;
  cidades: any[] = [];
  // estados : Observable<Estado[]>;
  filtrados: any[] = [];
  letter: {name: string, key: number}[];
  frame: any[] = [];
  idUf: number;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private consultaCep: ConsultaCepService,
    private generic: GenericService,
    private email: VerificaEmailService,
  ) {
      super();
  }

  ngOnInit(){
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    // })
    // this.estados = this.consultaCep.getEstado();
    this.frame = this.generic.getFramework();
    this.letter = this.generic.getNewsLetter();
    this.createForm();
    this.addCheckboxes();
  }

  createForm(){
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(8)]],
      //todo nesse caso do email se eu quisesse usar uma validação assincrona ficaria desta maneira
      // email: [null, [Validators.email, Validators.required], [this.verificaEmail.bind(this)]],
      email: [null, [Validators.email, Validators.required]],
      confirmarEmail: [null, [Validators.required, Validators.email,FormValidators.camposIguais('email')]],
        endereco: this.formBuilder.group({
          rua: [null, [Validators.required]],
          numero: [null, [Validators.required]],
          bairro: [null, [Validators.required]],
          cidade: [null, [Validators.required]],
          complemento: [null],
          cep: [null, [Validators.required, FormValidators.validatorCep]],
          uf: [<object | null>null, [Validators.required]],
          ufSelectBox: [<Estado[] | null>null, [Validators.required]]
      }),
        newsLetter: [0 , [Validators.required]],
        framework: new FormArray([], FormValidators.requiredMinCheckBox(2)),
    })

    // this.form.get('endereco.cep')?.valueChanges.subscribe(v => {if(v.length == 8)this.getApiViaCep(this.form.get('endereco.cep'))});
    this.form.get('endereco.cep')?.statusChanges.pipe(
      distinctUntilChanged(),
      //todo SwitchMap retorna um obeservavel, pode ser usados en validações antes de requisitar algo
      switchMap(status => {
        return status === 'VALID' ? this.consultaCep.getCep(this.form.get('endereco.cep')?.value) : empty();
      })
    ).subscribe(response => response ? this.vincularDados(response) : {});
  }

  get frameworkFormArray(): FormArray {
    return this.form.controls['framework'] as FormArray;
  }

  private addCheckboxes() {
    this.frame.forEach(() => this.frameworkFormArray.push(new FormControl(false)));
  }

  // override resetForm(){
  //   // this.form.reset();
  //   // this.createForm();
  //   // this.addCheckboxes();
  // }

  // onSubmit(form: FormGroup){
  //   if (form.valid){
  //     this.http.post('http://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(
  //       response => {
  //         this.resetForm();
  //       },
  //       error => alert('Deu Erro'),
  //     )
  //   }else{
  //     this.verificaValidForm(this.form);
  //   }
  // }



  // getApiViaCep(control: any){
    // if(value){
    //   value = value.replace(/\D/g, '');
    //   let validaCep = /^[0-9]{8}$/
    //   if(validaCep.test(value)){
    //     this.consultaCep.getCep(value).subscribe( (response: any) => {
    //        this.vincularDados(response);
    //     })
    //   }else {
    //     return this.form.get('endereco.cep')?.setErrors({cepInvalido: true})
    //   }
    // }

  //   if (!control.errors){
  //     this.consultaCep.getCep(control.value).subscribe( (response: any) => {
  //       this.vincularDados(response);
  //     })
  //   }
  // }

  vincularDados(response: any){
    // this.filtrarEstados(undefined, response.uf);
      console.log(response)
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

  filtrarCidade(event?: AutoCompleteCompleteEvent, uf?: string) {
    let filtered: any[] = [];
    this.cidades.forEach((item: any) => {
      let cidade = item;
      if (uf && cidade.sigla.toLowerCase().indexOf(uf.toLowerCase()) == 0){
        filtered.push(cidade);
      }
      if (event && cidade.sigla.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        filtered.push(cidade);
      }
      this.filtrados = filtered;
    })
  }

  verificaEmail(control: FormControl){
    this.email.getEmail(control.value).pipe(
      map(emailExiste => emailExiste ? {emailInvalido: true} : null)
    )
  }

  override submit(): any {
    this.http.post('http://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(
      response => {
        this.resetForm();
      },
      error => alert('Deu Erro'),
    )
  }

  getCidadePorUf(idUf: any){
    console.log(idUf.value.id)
    this.consultaCep.getCidade(String(idUf.value)).pipe(
        map((cidade: any) => {cidade.forEach(this.cidades.push(cidade.nome))})
    ).subscribe()

  }

}
