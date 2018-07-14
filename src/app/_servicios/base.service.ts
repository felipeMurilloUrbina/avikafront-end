import { MensajeEstatus } from './../_modelos/mensaje.enum';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ToasterService } from 'angular2-toaster';

declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private actionUrl: string;
  private toasterService: ToasterService;
  constructor(public http: HttpClient, public endPoint: string, toasterService: ToasterService) {
    this.actionUrl = environment.urlBase + endPoint;
  }

  public getUrl(): string {
    return this.actionUrl;
  }

  public getAll < T > () {
    return this.http.get < T > (this.actionUrl);
  }

  public getSingle < T > (id: number) {
    return this.http.get < T > (this.actionUrl + id);
  }

  public add <T> (itemName: string, endPoint) {
    const toAdd = JSON.stringify({
      ItemName: itemName
    });

    return this.http.post < T > (this.actionUrl, toAdd);
  }

  public update <T> (id: number, itemToUpdate: any) {
    return this.http
      .put <T> (this.actionUrl + id, JSON.stringify(itemToUpdate));
  }

  public delete <T> (id: number) {
    return this.http.delete <T>(this.actionUrl + id);
  }

  public enviarMensaje(opcion, titulo, mensaje) {
    this.toasterService.pop(opcion, titulo, mensaje);
  }

  activarEsperando() {
    $(document).ready(() => {
      $('body').waitMe({
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
      $('body').waitMe('hide');
    });
  }

}
