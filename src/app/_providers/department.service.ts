import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ToasterService } from 'angular2-toaster';
@Injectable({ providedIn: 'root' })
export class DepartmentService extends BaseService {
    constructor(public http: HttpClient, toasterService: ToasterService) {
        super(http, 'departments', toasterService);
     }
}
