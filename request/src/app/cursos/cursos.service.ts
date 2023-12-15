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

  postCurso(form: FormGroup){
    return this.http.post(this.API, form).pipe(
      take(1),
    );
  }

  putCurso(form: FormGroup){
    return this.http.put(this.API, form).pipe(
      take(1),
    )
  }

  deleteCurso(id: number){
    return this.http.delete(`${this.API}/${id}`).pipe(
      take(1)
    )
  }

}
