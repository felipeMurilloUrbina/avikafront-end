import { CompanyService } from './../../../_providers/company.service';
import { Company } from './../../../_models/company.model';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../_models/employee.model';
import { moduleTraslate } from '../../../_helpers/translate.module';
import { EmployeeService } from '../../../_providers/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageStatus } from '../../../_models/message.enum';
declare var $:  any;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [EmployeeService, CompanyService]
})
export class CreateComponent implements OnInit {
  title = 'Nuevo Empleado';
  employee: Employee;
  companies: Company[];

  en= moduleTraslate;

  constructor(private _router: Router, private _route: ActivatedRoute, private _service: EmployeeService, private _serviceCompany: CompanyService) {
  }
  
  ngOnInit() {
    this.employee = new Employee();
    this.getCompanies();
  }

  getCompanies() {
    this._serviceCompany.getAll(1,0).subscribe(data => {
      this.companies = <Company[]> data['items'];
      this._service.hide();
    });
  }

  save() {
    this._service.save(this.employee, '').subscribe(data=> {
      console.log(data);
      this._service.sendMessage(MessageStatus.ok, 'Sucursales', data);
      this.toBack();  
    });
  }
  
  toBack() {
    this._router.navigate(['//admin/sucursales'], { queryParams: {} });
  }
}
