import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'nuevo', component: CreateComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
