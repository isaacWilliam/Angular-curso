import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  cursos = [
    {
      id: 1, nome: 'Agular'
    },
    {
      id: 2, nome: 'Java'
    },
    {
      id: 3, nome: 'React'
    }
  ];

  getCursos(){
    return this.cursos;
  }
}
