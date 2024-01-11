import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curso} from "./model/curso";
import {delay, filter, map, take, tap, timeout} from "rxjs";
import {environment} from "../../environments/environment";
import {FormGroup} from "@angular/forms";

@Injectable({providedIn: 'root'})
export class CursosService {

  private readonly API = `${environment.API}/cursos`;
  constructor(
    private http: HttpClient
  ) { }

  getListCursos(){
    return this.http.get<Curso[]>(this.API)
    //   .pipe(
    //   delay(2000),
    // );
  }

  getCursoById(id: any){
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(
      take(1));
  }

  private postCurso(curso: Curso){
    return this.http.post(this.API, curso).pipe(
      take(1),
    );
  }

  private putCurso(curso: Curso){
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(
      take(1),
    )
  }

  deleteCurso(id: number | undefined){
    return this.http.delete(`${this.API}/${id}`).pipe(
      take(1)
    )
  }

  save(curso: Curso){
    if(curso.id){
      return this.putCurso(curso)
    }
    return this.postCurso(curso)
  }

}
