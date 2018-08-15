import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthenticationService } from '../_providers';
import { MessageStatus } from '../_models/message.enum';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private _service: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map(n => { 
                return n;
            }),
            catchError(err => {
                this._service.hide();
            if ((err.status === 0)) {
                this._service.sendMessage(MessageStatus.error, 'error', 'Ocurrio un error con el recurso solicitado');
                // console.log(err);
                // this.authenticationService.logout();
                // location.reload(true);
            } else if (err.status == 404 ) {
                this._service.sendMessage(MessageStatus.error, 'error', 'Ocurrio error, no se encontro el recurso');
            }else if (err.status === 401) {
                // auto logout if 401 response returned from api
                this._service.logout();
                location.reload(true);
            } else {
                console.log(err.error);
                const error = err.error.message ? err.error.message: err.error.error_description;
                console.log(error);
                this._service.sendMessage(MessageStatus.error, 'error', error);
            }

            // this._service.sendMessage(MessageStatus.error, 'error', );
            const error = err.error.message || err.statusText;
            return throwError(err.error);
        }));
    }
}
