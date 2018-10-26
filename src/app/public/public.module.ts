import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: []
})
export class PublicModule { }
