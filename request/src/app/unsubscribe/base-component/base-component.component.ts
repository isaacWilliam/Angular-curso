import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponentComponent {

  @Input() valor: any;
  @Input() estilo: string = '';
  @Input() title: string = '';


}
