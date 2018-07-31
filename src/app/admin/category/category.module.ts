import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModulesPrimeng } from '../../_helpers/module-primeng.module';
import { CreateComponent } from './create/create.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../../_helpers';


@NgModule({
  imports: [
    ModulesPrimeng,
    CategoryRoutingModule
  ],
  declarations: [CategoryComponent, CreateComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]
})
export class CategoryModule { }
