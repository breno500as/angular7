import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from '@app/classes/login';
import { TipoAcesso } from '@app/enum/tipoAcesso';
import { NgForm } from '@angular/forms';
import { AuthService } from '@app/core/services/autenticacao/auth.service';
import { MzToastService } from 'ngx-materialize';
import { Toast } from '../enum/toast';
import { toastTimeDelay } from '../core/helpers/constants';
import { AnotaaiResponse } from '@app/classes/anotaai-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm: NgForm;
  login: Login = new Login();
  tipoAcessoEmail: TipoAcesso = TipoAcesso.EMAIL;
  tipoAcessoTelefone: TipoAcesso = TipoAcesso.TELEFONE;

  constructor(private authService: AuthService, private toastService: MzToastService, private router: Router) { }

  ngOnInit() {
  }


  limpaCampos() {
    this.login.usuario.email = '';
    this.login.usuario.telefone.numeroConcatenado = '';
  }

  autenticaUsuario() {

    if (this.loginForm.valid) {
      this.authService.autenticaUsuario(this.login).subscribe((anotaaiResponse: AnotaaiResponse) => {
        this.authService.setCredentials(anotaaiResponse.login);
        this.router.navigate(['/adm']);
      }, (error) => this.toastService.show(error.messages[0].text, toastTimeDelay, Toast.ERROR));
    }

  }

}
