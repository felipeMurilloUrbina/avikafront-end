import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPrimeng } from '../../_helpers/module-primeng.module';
import { CreateComponent } from './create/create.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from '../../_helpers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [UserComponent, CreateComponent],
  imports: [
    ModulesPrimeng,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]
})
export class UserModule { }
