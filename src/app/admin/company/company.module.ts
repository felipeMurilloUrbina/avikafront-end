import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_helpers/module-primeng.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    CompanyRoutingModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
