import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CrudGeneric} from "../shared/crud-generic";
import {Curso} from "./model/curso";


@Injectable({providedIn: 'root'})
export class Cursos2Service extends CrudGeneric<Curso>{

  constructor(
    protected override http: HttpClient
  ) {
    super(http, `${environment.API}/cursos`);
  }


}
