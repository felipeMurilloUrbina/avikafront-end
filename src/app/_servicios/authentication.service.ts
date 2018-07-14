import { Headers } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToasterService } from 'angular2-toaster';
import { Usuario } from '../_modelos/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';
declare var $: any;

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private servicioMensaje: ToasterService;

    constructor(private http: HttpClient, servicioMensaje: ToasterService) {
        this.servicioMensaje = servicioMensaje;
    }

    login(usuario: Usuario) {
        let body = 'username=' + usuario.username + '&password=' + usuario.password + '&grant_type=password&client_id=' + environment.AppId;
        return this.http.post<any>(environment.urlBase + 'token',
                body,
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .pipe(map((res: any) => {
                console.log(res);
                // login successful if there's a jwt token in the response
                if (res && res.access_token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token',  res.access_token);
                    return true;
                }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }
    public enviarMensaje(opcion, titulo, mensaje) {
      this.servicioMensaje.pop(opcion, titulo, mensaje);
    }
    activarEsperando() {
        $(document).ready(() => {
          $('.login100-form').waitMe({
            effect: 'bounce',
            text: 'Cargando...',
            bg: 'rgba(255,255,255,0.6)',
            color: '#007bff',
            maxSize: '',
            waitTime: -1,
            source: '',
            textPos: 'vertical',
            fontSize: '18',
            onClose: function () {}
          });
        });
      }
    
    cerrarEsperando() {
        $(document).ready(() => {
          $('.login100-form').waitMe('hide');
        });
    }
}
