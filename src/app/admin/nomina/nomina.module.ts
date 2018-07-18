import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NominaComponent } from './nomina.component';
import { NominaRoutingModule } from './nomina-routing.module';
import { ModulosMaterial } from '../../_helpers/modulosCompartidos.module';

@NgModule({
  imports: [
    ModulosMaterial,
    NominaRoutingModule
  ],
  declarations: [NominaComponent]
})
export class NominaModule { }
