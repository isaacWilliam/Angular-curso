import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlunosService} from "../alunos.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent {

  inscricao: Subscription;
  aluno: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService
  ) {
    this.inscricao = this.activatedRoute.params.subscribe(response => {
      if (response['id']){
        let id = response['id'];
        this.alunosService.getAllAlunos().forEach(item => {if (item.id == id)this.aluno = item});
      }
    })
  }

}
