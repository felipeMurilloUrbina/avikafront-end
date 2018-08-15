import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModulesPrimeng } from '../../_helpers/module-primeng.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CreateComponent } from './create/create.component';
import { ErrorInterceptor } from '../../_helpers';

@NgModule({
  imports: [
    ModulesPrimeng,
    CompanyRoutingModule
  ],
  declarations: [CompanyComponent, CreateComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]
})
export class CompanyModule { }
