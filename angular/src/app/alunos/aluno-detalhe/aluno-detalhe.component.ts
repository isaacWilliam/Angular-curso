import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlunosService} from "../alunos.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnDestroy{

  inscrisao: Subscription = new Subscription();
  aluno: any;
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {
    this.inscrisao = this.activatedRouter.params.subscribe(response => {
      let id = response['id'];

      this.alunosService.getAllAlunos().forEach(item => {if(item.id == id) this.aluno = item})

    })
  }

  editarAluno(){
    this.router.navigate(['alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscrisao.unsubscribe();
  }

}
