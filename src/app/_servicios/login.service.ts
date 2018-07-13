import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BaseService } from '../_servicios/base.service';
import { HttpClient } from '@angular/common/http';

declare var $: any;
@Injectable()
export class LoginService extends BaseService {
  constructor(public http: HttpClient) {
    super(http, 'token');
  }

  login(Data) {
    const _data = JSON.stringify(Data);
    return this._http
    .post(
    BASEURL + '/login',
    _data,
    { headers : contentHeaders }).map( (res: Response) => {
      if ( res.status === 200 ) {
       return res.json();
     } else {
     return false;
    }
    });
  }

  // cerrarEsperando() {
  //   $('.login-box-body').waitMe('hide');
  //   // $('#' + contenedor).waitMe('hide');
  // }
}
