import { Component, OnInit, Input } from '@angular/core';
import { DepartmentService } from '../../_providers/department.service';
import { Department } from '../../_models/department.model';

@Component({
  selector: 'app-dept-combo',
  templateUrl: './dept-combo.component.html',
  styleUrls: ['./dept-combo.component.css'],
  providers: [DepartmentService]
})
export class DeptComboComponent implements OnInit {
  departments: Department[];
  @Input() departmentId: number; 
  constructor(private _service: DepartmentService) { }

  ngOnInit() {
    this._service.getAll(1, 0).subscribe(data=> {
      this.departments = <Department[]>data['items'];
    });
  }

}
