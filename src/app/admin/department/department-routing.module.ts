import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: DepartmentComponent },
  { path: 'nuevo', component: CreateComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
