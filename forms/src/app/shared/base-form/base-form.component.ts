import { Component } from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent {

  form: FormGroup;

  abstract submit():any;
  onSubmit(){
    if(this.form.valid) {
      this.submit()
    }else{
      this.verificaValidForm(this.form)
    }
  }

  verificaValidForm(form: FormGroup | FormArray){
    Object.keys(form.controls).forEach(valor => {
      let input = form.get(valor);
      input?.markAsTouched();
      input?.markAsDirty();
      if(input instanceof FormGroup || input instanceof FormArray){
        this.verificaValidForm(input)
      }
    })
  }

  getClass(form: any){
    return !!(form.errors && form.touched);
  }

  resetForm(){
    this.form.reset();
  }
}
