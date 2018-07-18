import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalRoutingModule } from './sucursal-routing.module';
import { SucursalComponent } from './sucursal.component';
import { ModulosMaterial } from '../../_helpers/modulosCompartidos.module';

@NgModule({
  imports: [
    ModulosMaterial,
    SucursalRoutingModule
  ],
  declarations: [SucursalComponent]
})
export class SucursalModule { }
