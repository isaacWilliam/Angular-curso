import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from "@angular/router";
import {AlunosService} from "../alunos.service";
import {filter, mapTo, merge, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit ,OnDestroy{

  inscrisao: Subscription = new Subscription();
  aluno: any;

  isLoading$!: Observable<boolean>;
  private _showLoaderEvents$!: Observable<boolean>;
  private _hideLoaderEvents$!: Observable<boolean>;
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {
    // this.inscrisao = this.activatedRouter.params.subscribe(response => {
    //   let id = response['id'];
    //
    //   this.aluno = this.alunosService.getAlunoById(id);
    //
    // })
  }

  ngOnInit() {
    this.activatedRouter.data
      .subscribe(data => {
        this.aluno = data['aluno'];
      });

    /* todo Usado para um progress Bar caso o carregamento seja lento
    // this._showLoaderEvents$ = this.router.events.pipe(
    //   filter(event => event instanceof ResolveStart),
    //   mapTo(true)
    // );
    // this._hideLoaderEvents$ = this.router.events.pipe(
    //   filter(event => event instanceof ResolveEnd),
    //   mapTo(false)
    // );
    // this.isLoading$ = merge(this._hideLoaderEvents$, this._showLoaderEvents$);*/
  }

  editarAluno(){
    this.router.navigate(['alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscrisao.unsubscribe();
  }

}
