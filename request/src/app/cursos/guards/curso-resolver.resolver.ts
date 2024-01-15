import {ActivatedRouteSnapshot, ResolveFn} from '@angular/router';
import {Curso} from "../model/curso";
import {Observable, of} from "rxjs";
import {CursosService} from "../cursos.service";
import {inject} from "@angular/core";
import {Cursos2Service} from "../cursos2.service";

export const cursoResolverResolver: ResolveFn<Curso> = (route: ActivatedRouteSnapshot): Observable<any> => {
  const cs = inject(Cursos2Service);
  const id = route.paramMap.get('id')!;

  if(id){
    return cs.getById(id)
  }

  return of({
    id: 0,
    nome: ''
  })

};
