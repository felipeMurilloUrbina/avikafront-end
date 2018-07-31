import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonsVisible } from '../../_models/button-visible.model';
import { DepartmentService } from '../../_providers/department.service';
import { Department } from '../../_models/department.model';
import { MessageStatus } from '../../_models/message.enum';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService]
})
export class DepartmentComponent implements OnInit {
  title = 'Departamentos';
  buttons: ButtonsVisible;
  cols: any[];
  departments: Department[]= [];
  selectedDepartment: Department;
  modifiedDepartment: Department;
  displayDialog: boolean;
  isNew: boolean;
  isLoad= false;
  qty = 0;
  titleDialog= 'Nuevo Departamento';
  constructor(private _service: DepartmentService) {
    this.cols = [
        { field: 'id', header: 'Codigo' },
        { field: 'description', header: 'Descripcion' },
      ]; 
    this.buttons = new ButtonsVisible();
  }

  ngOnInit() {
    this.get();
  }

  get() {
    this._service.getAll(1, this.qty).subscribe((data)=> {
      this.departments = (<Department[]>data['items']);
      this._service.hide();
      this.isLoad = true;
    });
  }

  edit(department) {
    this.titleDialog= 'Editar Departamento';    
    this.isNew = false;
    this.selectedDepartment= <Department>department;
    this.modifiedDepartment = this.clone(department);
    this.displayDialog = true;
  }
  
  delete(department) {
    this.titleDialog= 'Eliminar Departamento';
    this.buttons.buttonDelete = true;
    this.buttons.buttonSave = false;
    this.modifiedDepartment= department;
    this.displayDialog = true;
  }

  deleteConfirm() {
    this._service.delete(this.modifiedDepartment.id).subscribe(data => {
      this._service.sendMessage(MessageStatus.ok, 'Información', data);
      let index = this.departments.indexOf(this.modifiedDepartment);
      this.departments.splice(index, 1);
      this.clean();
    });
  }

  new() {
    this.isNew = true;
    this.titleDialog= 'Nuevo Departamento';
    this.buttons.buttonSave = true;
    this.modifiedDepartment = new Department();
    this.displayDialog = true;
  }

  save() {
    if(this.isNew) {
      this._service.add(this.modifiedDepartment, '').subscribe(data=> {
        // this.departments.push(this.modifiedDepartment);
        this._service.sendMessage(MessageStatus.ok, 'Información', data);
        this.clean();
      });
    } else  {
      this._service.update(this.selectedDepartment.id, this.modifiedDepartment).subscribe(data=> {
        this.departments[this.departments.indexOf(this.selectedDepartment)] = this.modifiedDepartment;
        this._service.sendMessage(MessageStatus.ok, 'Información', data);
        this.clean();
      });
    }
  }

  clean() {
    this.displayDialog= false;
    this.modifiedDepartment = new Department();
    this.selectedDepartment = new Department();
    this.buttons= new ButtonsVisible();
    this.get();
  }

  clone(d: Department): Department {
    let department = new Department();
    for (let prop in d) {
        department[prop] = d[prop];
    }
    return department;
  }
}
