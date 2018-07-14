import { Usuario } from './../_modelos/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ToasterService } from 'angular2-toaster';
@Injectable({ providedIn: 'root' })
export class UsuarioService extends BaseService {
    constructor(public http: HttpClient, public servicioMensaje: ToasterService) {
        super(http, 'usuarios', servicioMensaje);
     }

    // getAll() {
    //     return this.http.get<Usuario[]>('/api/users');
    // }
}
