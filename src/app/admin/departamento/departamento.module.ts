import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';
import { ModulosMaterial } from '../../_helpers/modulosCompartidos.module';

@NgModule({
  imports: [
    ModulosMaterial,
    DepartamentoRoutingModule
  ],
  declarations: [DepartamentoComponent]
})
export class DepartamentoModule { }
