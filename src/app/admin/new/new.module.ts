import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesPrimeng } from '../../_helpers/module-primeng.module';
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';

@NgModule({
  imports: [
    ModulesPrimeng,
    NewRoutingModule
  ],
  declarations: [NewComponent]
})
export class NewModule { }
