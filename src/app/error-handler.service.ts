import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerService implements HttpInterceptor {
  constructor(
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error) => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          if (error.status === 401) {
            this.router.navigate(['/unauthorized']);
          }

          if (error.status === 403) {
            this.router.navigate(['/forbidden']);
          }
        }
        // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
        return throwError(errorMessage);
      })
    );
  }
}
