import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const publicRoutes = [

];

@NgModule({
    imports: [
      RouterModule.forChild(publicRoutes)
    ],
    exports: [
      RouterModule
    ],
    providers: [
    ]
  })
  export class PublicRoutingModule {

  }
