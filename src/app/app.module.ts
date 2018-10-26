import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { MzRadioButtonModule } from 'ngx-materialize';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { MzToastModule } from 'ngx-materialize';
import { ErroComponent } from './http/erro/erro.component';
import { NaoEncontradoComponent } from './http/nao-encontrado/nao-encontrado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavMenuComponent,
    ErroComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    NgxMaskModule.forRoot(),
    HttpClientModule,
    MzRadioButtonModule,
    FormsModule,
    MzToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
