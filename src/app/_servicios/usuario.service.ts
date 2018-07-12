import { Usuario } from './../_modelos/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class UsuarioService extends BaseService {
    constructor(public http: HttpClient) {
        super(http, 'usuarios');
     }

    // getAll() {
    //     return this.http.get<Usuario[]>('/api/users');
    // }
}
