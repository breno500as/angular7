import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '@app/classes/usuarioLogin';
import { TipoAcesso } from '@app/enum/tipoAcesso';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin();
  tipoAcessoEmail: TipoAcesso.EMAIL;
  tipoAcessoTelefone: TipoAcesso.TELEFONE;

  constructor() { }

  ngOnInit() {
  }

}
