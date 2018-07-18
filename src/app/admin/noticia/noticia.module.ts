import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiaRoutingModule } from './noticia-routing.module';
import { NoticiaComponent } from './noticia.component';
import { ModulosMaterial } from '../../_helpers/modulosCompartidos.module';

@NgModule({
  imports: [
    ModulosMaterial,
    NoticiaRoutingModule
  ],
  declarations: [NoticiaComponent]
})
export class NoticiaModule { }
