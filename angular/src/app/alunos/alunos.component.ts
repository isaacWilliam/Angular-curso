import { Component } from '@angular/core';
import {AlunosService} from "./alunos.service";

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent {

  alunos: {id: number, nome: string}[];
  constructor(
    private alunosService: AlunosService
  ) {
    this.alunos = this.alunosService.getAllAlunos()
  }



}
