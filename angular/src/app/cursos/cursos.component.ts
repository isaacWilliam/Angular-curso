import { Component } from '@angular/core';
import {CursosService} from "./cursos.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos : any[] = [];
  constructor(
    private cursosService: CursosService,
    private route: Router
  ) {
    this.cursos = this.cursosService.getCursos();
  }

}
