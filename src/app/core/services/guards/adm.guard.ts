import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../autenticacao/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdmGuard implements CanActivate, CanLoad {


  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificaUsuario();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificaUsuario();
  }

  verificaUsuario() {

    if (this.authService.temUsuario()) {
      return true;
    } else {
       this.router.navigate(['/']);
       return false;
    }
  }
}
