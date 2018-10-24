import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { AdmRoutingModule } from './adm-routing.module';
import { CapaComponent } from './capa/capa.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdmRoutingModule
  ],
  declarations: [
     CapaComponent
  ]
})
export class AdmModule { }
