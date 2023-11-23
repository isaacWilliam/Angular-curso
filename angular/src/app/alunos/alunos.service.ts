import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {Aluno} from "./aluno";

@Injectable()
export class AlunosService {

  private alunos = [
    {
      id: 1, nome: 'Genilson', idade: 15, altura: 1.59
    },
    {
      id: 2, nome: 'Celso', idade: 15, altura: 1.75
    },
    {
      id: 3, nome: 'Vander', idade: 16, altura: 1.80
    }];

  private alunos2 = [
    {
      id: 1, nome: 'Genilson', idade: 15, altura: 1.59
    },
    {
      id: 2, nome: 'Celso', idade: 15, altura: 1.75
    },
    {
      id: 3, nome: 'Vander', idade: 16, altura: 1.80
    }];

  private alunos$: BehaviorSubject<Aluno[]> = new BehaviorSubject<Aluno[]>(this.alunos2);

  getAllAlunos(){
    return this.alunos;
  }

  getAllAlunos2(){
    return this.alunos$;
  }

  getAlunoById(id: any){
    return this.getAllAlunos().find(response => response.id == id);
  }

  getAlunoById2(id: number | string){
      return this.getAllAlunos2().pipe(
        map(aluno => aluno.find(aluno => aluno.id === +id)!)
      );
    }
  constructor() { }
}
