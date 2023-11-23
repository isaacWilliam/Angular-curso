import {inject, Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate, CanMatchFn, Route,
  Router,
  RouterStateSnapshot, UrlSegment,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";


@Injectable()

export class AuthGuard {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree | any {
  //   if(this.authService.getAutenticado()){
  //     return true;
  //   }
  //   this.router.navigate(['/login']);
  //   return false;
  // }

}


export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('authGuard#canActivate called');
  if(authService.getAutenticado()){
    return true;
  }
  router.navigate(['/login']);
  return false;
};

//todo Usado para não carregar outros componentes mas ainda não sei usar corretamentes
export const canMatchTeam: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return inject(AuthService).canMatch();
};
