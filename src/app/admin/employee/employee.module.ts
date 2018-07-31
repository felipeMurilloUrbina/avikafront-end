import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { CreateComponent } from './create/create.component';
import { ModulesPrimeng } from '../../_helpers/module-primeng.module';
import { ErrorInterceptor } from '../../_helpers';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ModulesPrimeng,
    EmployeeRoutingModule
  ],
  declarations: [EmployeeComponent, CreateComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]
})
export class EmployeeModule { }
