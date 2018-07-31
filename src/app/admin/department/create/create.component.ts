import { Component, OnInit } from '@angular/core';
import { Department } from '../../../_models/department.model';
import { DepartmentService } from '../../../_providers/department.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [DepartmentService]
})
export class CreateComponent implements OnInit {
  title = 'Nuevo Departamento';
  department: Department;
  constructor(private _service: DepartmentService) {
    this.department = new Department();
   }

  ngOnInit() {
  }

  save() {
    console.log(this.department);
    this._service.add(this.department, '').subscribe(data=>{
      console.log(data);
    });
  }

}
