import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'nuevo', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
