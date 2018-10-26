import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { Login } from '@app/classes/login';
import { environment } from '@env/environment';
import { getPhoneMask } from '../../helpers/stringHelper';
import { credential } from '../../helpers/constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: LocalStorageService, private httpClient: HttpClient) { }

  setCredentials(login) {

    let telefoneStr = login.usuario.telefone.ddd.toString() + login.usuario.telefone.numero.toString();

    const authdata =  btoa(login.usuario.email + ':' + login.sessionID + ':' + login.usuario.telefone.ddi.toString() + telefoneStr);
    const index = login.usuario.nome.indexOf(' ');
    const primeiroNome = index !== -1 ? login.usuario.nome.substring(0, index) : login.usuario.nome;

    telefoneStr = getPhoneMask(telefoneStr);

    const loginStorage = { telefoneStr: '', authdata: '', primeiroNome: '', email: '',  endereco: ''};

    loginStorage.telefoneStr = telefoneStr;
    loginStorage.authdata = authdata;
    loginStorage.primeiroNome = primeiroNome;
    loginStorage.email = login.usuario.email;
    loginStorage.endereco = 'Rua da Paz';

    const data = JSON.stringify(loginStorage);

    this.storage.store(credential, data);
  }

  temUsuario(): boolean {
    return this.storage.retrieve(credential) !== null;
  }

  getUsuario() {
    return this.storage.retrieve(credential);
  }

  limpaUsuario() {
    this.storage.clear(credential);
  }

  autenticaUsuario(login: Login) {
    login.usuario.senha = btoa(login.usuario.senha);
    return this.httpClient.post(`${environment.url}/usuarios/login`, login);
  }

}
