import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayRollComponent } from './payroll.component';

const routes: Routes = [
  { path: '', component: PayRollComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayRollRoutingModule { }
