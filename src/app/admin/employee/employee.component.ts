import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../_providers/employee.service';
import { Employee } from '../../_models/employee.model';
import { ButtonsVisible } from '../../_models/button-visible.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  title = 'Empleados';  
  cols: any[];
  employees: Employee[];
  buttons: ButtonsVisible;

  constructor(private _service: EmployeeService) {
    this.cols = [
        { field: 'id', header: 'Codigo' },
        { field: 'fullName', header: 'Descripcion' },
        { field: 'rfc', header: 'RFC' },
        { field: 'curp', header: 'CURP' },
      ];
    this.buttons = new ButtonsVisible();
  }

  ngOnInit() {
    this._service.getAll(1,20).subscribe(data=> {
      this._service.hide();
      this.employees = <Employee[]>data['items'];
    });
  }


}
