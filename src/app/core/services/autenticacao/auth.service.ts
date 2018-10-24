import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: LocalStorageService) { }

  saveValue(value: any) {
    this.storage.store('boundValue', value);
  }


  retrieveValue(value: string) {
    return this.storage.retrieve(value);
  }

  clearItem(value: string) {
    this.storage.clear(value);
  }

}
