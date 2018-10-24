import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '@app/classes/usuarioLogin';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: LocalStorageService, private httpClient: HttpClient) { }

  saveValue(value: any) {
    this.storage.store('boundValue', value);
  }


  retrieveValue(value: string) {
    return this.storage.retrieve(value);
  }

  clearItem(value: string) {
    this.storage.clear(value);
  }

  login(usuarioLogin: UsuarioLogin) {
     return this.httpClient.post(`${environment.url}/login`, usuarioLogin);
  }

}
