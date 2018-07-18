import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { ModulosMaterial } from '../../_helpers/modulosCompartidos.module';

@NgModule({
  imports: [
    ModulosMaterial,
    UsuarioRoutingModule
  ],
  declarations: [UsuarioComponent]
})
export class UsuarioModule { }
