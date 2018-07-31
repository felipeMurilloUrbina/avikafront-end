import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../_models/employee.model';
import { moduleTraslate } from '../../../_helpers/translate.module';
import { EmployeeService } from '../../../_providers/employee.service';
declare var $:  any;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [EmployeeService]
})
export class CreateComponent implements OnInit {
  title = 'Nuevo Empleado';
  employee: Employee;
  en= moduleTraslate;

  constructor(private _service: EmployeeService) {
  }
  
  ngOnInit() {
    this.employee = new Employee();
    console.log(this.employee);
  }
  save() {
    console.log(this.employee);
    
    // this._service.add(this.employee, '').subscribe(data=> {
    //   console.log(data);
    // });

  }
}
