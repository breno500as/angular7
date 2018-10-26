import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { AdmRoutingModule } from './adm-routing.module';
import { CapaComponent } from './capa/capa.component';
import { MzSidenavModule } from 'ngx-materialize';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FirstComponent } from './first/first.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdmRoutingModule,
    MzSidenavModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
     CapaComponent,
     SideMenuComponent,
     FirstComponent
  ]
})
export class AdmModule { }
