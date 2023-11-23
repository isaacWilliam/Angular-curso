import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlunosService} from "../alunos.service";
import {Subscription} from "rxjs";
import {AlteracaoForm} from "../../interfaces/alteracao-form";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements AlteracaoForm {

  inscricao: Subscription;
  aluno: any;
  mudou: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService
  ) {
    this.inscricao = this.activatedRoute.params.subscribe(response => {
      if (response['id']){
        let id = response['id'];
        // this.alunosService.getAllAlunos().forEach(item => {if (item.id == id)this.aluno = item});
        this.aluno = this.alunosService.getAlunoById(id)
      }
    })
  }

  //Método com Interface Genérica recebe uma logica e devolve um boolean
  possuiAlteracao(): boolean {
    if (this.mudou){
      return confirm('Deseja Sair da Página?');
    }

    return true;
  }

  formMudou(){
    this.mudou = true;
  }


  //Método específico para um módulo
  mudarPagina(){

    if (this.mudou){
      return confirm('Deseja Sair da Página?');
    }

    return true;
  }

}
