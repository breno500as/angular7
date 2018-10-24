import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicGuard } from './core/services/guards/public.guard';
import { LoginComponent } from './login/login.component';
import { AdmGuard } from './core/services/guards/adm.guard';

const routes: Routes = [

  { path: 'public', loadChildren: './public/public.module#PublicModule', data: { preload: true }, canActivate: [PublicGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'adm', loadChildren: './adm/adm.module#AdmModule', canLoad: [AdmGuard] }
  /*
  { path: '403', component: ForbiddenComponent },
  { path: '500', component: ErrorComponent },
  { path: '503', component: ErrorComponent },
  { path: '**', component: NotFoundComponent }   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
