import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import { ModulosMaterial } from '../../_helpers/modulosCompartidos.module';


@NgModule({
  imports: [
    ModulosMaterial,
    CategoriaRoutingModule
  ],
  declarations: [CategoriaComponent]
})
export class CategoriaModule { }
