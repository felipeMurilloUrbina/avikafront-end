import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { BaseService } from '../_servicios/base.service';

@Injectable()
export class EstructuraService  extends  BaseService {

  constructor( public http: HttpClient, public servicioMensaje: ToasterService) {
    super(http, '', servicioMensaje);
  }
}
