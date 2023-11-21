import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AlunoFormComponent} from "../alunos/aluno-form/aluno-form.component";

@Injectable()

export class AlunosDeactivatedGuard implements CanDeactivate<AlunoFormComponent>{

  canDeactivate(component: AlunoFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | any {

    console.log(currentRoute)
    console.log(currentState)
    return component.mudarPagina()
  }

}
