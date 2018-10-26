import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../autenticacao/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  /**
   *  Se estiver logado não pode acessar rotas públicas, redireciona para as rotas privadas.
   */

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const temUsuario = this.authService.temUsuario();

    if (temUsuario) {
      this.router.navigate(['/adm']);
      return false;
    }

    return true;
  }
}
