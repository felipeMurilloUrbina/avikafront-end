import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesPrimeng } from '../../_helpers/module-primeng.module';
import { CreateComponent } from './create/create.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from '../../_helpers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    ModulesPrimeng,
    DepartmentRoutingModule
  ],
  declarations: [DepartmentComponent, CreateComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]
})
export class DepartmentModule { }
