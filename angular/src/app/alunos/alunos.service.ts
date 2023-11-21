import { Injectable } from '@angular/core';

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

  getAllAlunos(){
    return this.alunos;
  }
  constructor() { }
}
