import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthService } from './services/autenticacao/auth.service';
import { AdmGuard } from './services/guards/adm.guard';
import { PublicGuard } from './services/guards/public.guard';
import { httpInterceptorProviders } from '@app/core/services/http-interceptors/index-interceptors';
import { AppCustomPreloaderService } from './services/preloading/app-custom-preloader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        PublicGuard,
        AdmGuard,
        AppCustomPreloaderService,
        AuthService,
        httpInterceptorProviders
      ]
    };
  }

}
