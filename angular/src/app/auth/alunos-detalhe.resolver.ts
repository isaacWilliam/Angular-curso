import {ActivatedRouteSnapshot, ResolveFn, Router} from '@angular/router';
import {Aluno} from "../alunos/aluno";
import {inject} from "@angular/core";
import {AlunosService} from "../alunos/alunos.service";
import {EMPTY, mergeMap, of, timeout} from "rxjs";

export const alunosDetalheResolver: ResolveFn<Aluno> = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const as = inject(AlunosService);
  const id = route.paramMap.get('id')!;

  return as.getAlunoById2(Number(id)).pipe(mergeMap(aluno => {

    if (aluno) {
      return of(aluno);
    } else {  // id not found
      router.navigate(['']);
      return EMPTY;
    }


  }));

};
