import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class BaseService {

    private actionUrl: string;

    constructor(public http: HttpClient, public endPoint: string) {
        this.actionUrl = environment.urlBase + endPoint;
    }

    public getUrl(): string {
      return this.actionUrl;
    }

    public getAll<T>() {
        return this.http.get<T>(this.actionUrl);
    }

    public getSingle<T>(id: number) {
        return this.http.get<T>(this.actionUrl + id);
    }

    public add<T>(itemName: string) {
        const toAdd = JSON.stringify({ ItemName: itemName });

        return this.http.post<T>(this.actionUrl, toAdd);
    }

    public update<T>(id: number, itemToUpdate: any) {
        return this.http
            .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete<T>(id: number) {
        return this.http.delete<T>(this.actionUrl + id);
    }
}
