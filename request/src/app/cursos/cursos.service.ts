import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curso} from "./model/curso";
import {delay, tap} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}/cursos`;
  constructor(
    private http: HttpClient
  ) { }

  getListCursos(){
    return this.http.get<Curso[]>(this.API).pipe(
      delay(2000),
      tap(console.log)
    );
  }

}
