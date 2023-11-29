import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit{

  @Input() form: any;
  @Input() msg: string;

  ngOnInit() {

  }

}
