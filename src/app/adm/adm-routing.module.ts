import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdmGuard } from '@app/core/services/guards/adm.guard';
import { CanDeactivateAdmGuard } from '@app/core/services/guards/candeactivateadm.guard';
import { CapaComponent } from './capa/capa.component';
import { FirstComponent } from './first/first.component';

const admRoutes = [

  {
    path: '',
    component: CapaComponent,
    canActivate: [AdmGuard],
    canDeactivate: [CanDeactivateAdmGuard],
    children: [
      {
        path: '',
        component: FirstComponent
      },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(admRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AdmRoutingModule {
}
