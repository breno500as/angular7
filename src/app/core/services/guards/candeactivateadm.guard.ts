import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../autenticacao/auth.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateAdmGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(private authService: AuthService, private router: Router) {

  }

  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState:
    RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const temUsuario = this.authService.temUsuario();

    if (temUsuario) {
      this.router.navigate(['/adm']);
      return false;
    }

    return true;
  }

}

