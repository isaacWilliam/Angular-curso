import { Component } from '@angular/core';
import {CursosService} from "./cursos.service";
import {Curso} from "./model/curso";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  preserveWhitespaces: true
})
export class CursosComponent {

  // cursos: any;
  cursos$: Observable<any> = new Observable<any>;
  constructor(
    private cursoService: CursosService
  ) {
    this.getCursos()
  }

  getCursos(){
     this.cursos$ = this.cursoService.getListCursos();
  }

}
