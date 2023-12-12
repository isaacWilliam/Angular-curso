import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const INPUT_ACCESOR_VALUE: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
}
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [INPUT_ACCESOR_VALUE]
})
export class InputFieldComponent implements ControlValueAccessor{

  @Input() classErro: boolean;
  @Input() inputName: string;
  @Input() label: string;
  @Input() control: any;
  @Input() type = 'text';
  @Input() isReadOnly = false;

  private innerValue: any;

  get value(){
    return this.innerValue;
  }

  set value(v: any){
    // this.innerValue = v !== this.innerValue ? v : this.innerValue;
    if(this.innerValue !== v) this.innerValue = v;
    this.onChangeCB(v)
  }

  onChangeCB: (_: any) => void = () => {};
  onTouchedCB: (_: any) => void = () => {};

  registerOnChange(fn: any): void {
    this.onChangeCB = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCB = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

}
