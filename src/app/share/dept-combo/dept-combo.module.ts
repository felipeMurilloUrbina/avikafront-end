import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptComboComponent } from './dept-combo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeptComboComponent],
  exports: [DeptComboComponent]
})
export class ShareModule { }
