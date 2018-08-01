import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_helpers/module-primeng.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CompanyRoutingModule
  ],
  declarations: [CompanyComponent, CreateComponent]
})
export class CompanyModule { }
