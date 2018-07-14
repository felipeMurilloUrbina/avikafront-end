import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';

@NgModule({
  imports: [
    CommonModule,
    DepartamentoRoutingModule
  ],
  declarations: [DepartamentoComponent]
})
export class DepartamentoModule { }
