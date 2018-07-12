import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VentasComponent],
  exports: [VentasComponent]
})
export class VentasModule { }
