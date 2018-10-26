import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmGuard } from './core/services/guards/adm.guard';
import { PublicGuard } from './core/services/guards/public.guard';
import { AppCustomPreloaderService } from './core/services/preloading/app-custom-preloader.service';
import { ErroComponent } from './http/erro/erro.component';
import { NaoEncontradoComponent } from './http/nao-encontrado/nao-encontrado.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full', canActivate: [PublicGuard] },
  { path: 'public', loadChildren: './public/public.module#PublicModule', data: { preload: true }, canActivate: [PublicGuard] },
  { path: 'login', component: LoginComponent , canActivate: [PublicGuard] },
  { path: 'adm', loadChildren: './adm/adm.module#AdmModule', canLoad: [AdmGuard] },
  { path: '500', component: ErroComponent },
  { path: '404', component: NaoEncontradoComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloaderService })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


