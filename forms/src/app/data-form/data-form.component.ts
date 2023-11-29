import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit{

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(){
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    // })
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
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

  createForm(){
    // this.form = this.formBuilder.group({
    //   name: [null],
    //   email: [null],
    //   endereco: {
    //     rua: [null],
    //     numero: [null],
    //     bairro: [null],
    //     cidade: [null],
    //     complemento: [null],
    //     cep: [null],
    //     uf: [null],
    //   }
    // })
  }

  resetForm(){
    this.form.reset();
  }

  onSubmit(form: FormGroup){

  }

}
