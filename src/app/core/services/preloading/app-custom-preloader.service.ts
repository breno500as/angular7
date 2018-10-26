import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppCustomPreloaderService implements PreloadingStrategy {

  preloadedModules: string[] = [];

  constructor() { }

  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data['preload']) {
      this.preloadedModules.push(route.path);
      console.log('Preloaded: ' + route.path);
      return load();
    } else {
      return of(null);
    }
  }
}
