import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ToastErrorInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(tap(response => response, error => this.handleError(error)));
    }

    private handleError(httpErrorResponse: HttpErrorResponse) {
    }
  }

