import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructEmployeeComponent } from './struct/struct/struct.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: StructEmployeeComponent,
    children:[
      {path: '', component:HomeComponent}
    ]  
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
