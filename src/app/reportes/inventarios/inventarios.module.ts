import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventariosComponent } from './inventarios.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InventariosComponent],
  exports: [InventariosComponent]
})
export class InventariosModule { }
