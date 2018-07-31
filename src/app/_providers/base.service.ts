import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ToasterService } from 'angular2-toaster';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { map } from 'rxjs/operators';

declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private actionUrl: string;
  // private toasterService: ToasterService;
  httpOptions: any;
  constructor(public http: HttpClient, public endPoint: string, private toasterService: ToasterService) {
    this.actionUrl = environment.urlBase + endPoint;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-Control': 'no-cache',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
  }
  
  public getUrl(): string {
    return this.actionUrl;
  }
  
  public getAll<T>(page, qty) {
    var uri = this.actionUrl +'?page=' + page + '&qty=' + qty;
    this.show();
    return this.http.get<T>(uri, this.httpOptions);
  }

  public getSingle <T> (id: number) {
    return this.http.get <T> (this.actionUrl + id);
  }

  public add <T> (itemName: T, endPoint) {
    return this.http.post <T> (this.actionUrl, itemName, this.httpOptions);
  }

  public update <T> (id: number, itemToUpdate: any) {
    return this.http
      .put <T> (this.actionUrl, JSON.stringify(itemToUpdate), this.httpOptions);
  }

  public delete <T> (id: number) {
    return this.http.delete <T>(this.actionUrl + '/' + id, this.httpOptions);
  }

  public sendMessage(option, title, message) {
    this.toasterService.pop(option, title, message);
  }

  show() {
    $(document).ready(() => {
      $('.content-wrapper').waitMe({
        effect: 'bounce',
        text: 'Cargando...',
        bg: 'rgba(116, 116, 122, 0.58)',
        color: '#1c1f1f',
        maxSize: '',
        waitTime: -1,
        source: '',
        textPos: 'vertical',
        fontSize: '18',
        onClose: function () {}
      });
    });
  }

  hide() {
    $(document).ready(() => {
      $('.content-wrapper').waitMe('hide');
    });
  }

  resolveFieldData(data: any, field: string): any {
    if (data && field) {
      if (field.indexOf('.') === -1) {
        return data[field];
      } else {
        const fields: string[] = field.split('.');
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }

}
