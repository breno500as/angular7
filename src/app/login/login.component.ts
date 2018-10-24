import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioLogin } from '@app/classes/usuarioLogin';
import { TipoAcesso } from '@app/enum/tipoAcesso';
import { NgForm } from '@angular/forms';
import { AuthService } from '@app/core/services/autenticacao/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm: NgForm;
  usuarioLogin: UsuarioLogin = new UsuarioLogin();
  tipoAcessoEmail: TipoAcesso = TipoAcesso.EMAIL;
  tipoAcessoTelefone: TipoAcesso = TipoAcesso.TELEFONE;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  limpaCampos() {
    this.usuarioLogin.usuario.email = '';
    this.usuarioLogin.usuario.telefone.numeroConcatenado = '';
  }

  login() {

    if (this.loginForm.valid) {
      this.authService.login(this.usuarioLogin).subscribe(() => {

      });
    }

  }

}
