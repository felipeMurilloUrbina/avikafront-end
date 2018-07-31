import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './_guards';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', loadChildren: './admin/struct/struct.module#StructModule' },
  { path: 'cliente', loadChildren: './client/client.module#ClientModule'},
  { path: 'empleado', loadChildren: './employee/employee.module#EmployeeModule'},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
