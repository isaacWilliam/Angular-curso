import {ActivatedRouteSnapshot, ResolveFn} from '@angular/router';
import {Curso} from "../model/curso";
import {Observable, of} from "rxjs";
import {CursosService} from "../cursos.service";
import {inject} from "@angular/core";

export const cursoResolverResolver: ResolveFn<Curso> = (route: ActivatedRouteSnapshot): Observable<Curso> => {
  const cs = inject(CursosService);
  const id = route.paramMap.get('id')!;

  if(id){
    return cs.getCursoById(id)
  }

  return of({
    id: 0,
    nome: ''
  })

};
