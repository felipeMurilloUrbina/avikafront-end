import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_helpers/module-primeng.module';
import { PayRollRoutingModule } from './payroll-routing.module';
import { PayRollComponent } from './payroll.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    PayRollRoutingModule
  ],
  declarations: [PayRollComponent]
})
export class PayRollModule { }
