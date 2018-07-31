import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StructClientComponent } from './struct/struct/struct.component';

const routes: Routes = [
  {path: '', component: StructClientComponent,
  children:[
    {path: '', component: HomeComponent}
  ]  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
