import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../_guards';
import { StructComponent } from './struct/struct.component';

const routes: Routes = [
    {
      path: '', component: StructComponent,
      children: [
        { path:'', redirectTo: 'departamentos', pathMatch: 'full' },
        { path: 'clasificaciones', loadChildren: '../category/category.module#CategoryModule', canActivate: [AuthGuard] },
        { path: 'departamentos', loadChildren: '../department/department.module#DepartmentModule', canActivate: [AuthGuard] },
        { path: 'usuarios', loadChildren: '../user/user.module#UserModule', canActivate: [AuthGuard] },
        { path: 'empleados', loadChildren: '../employee/employee.module#EmployeeModule', canActivate: [AuthGuard] },
        { path: 'noticias', loadChildren: '../new/new.module#NewModule', canActivate: [AuthGuard] },
        { path: 'nominas', loadChildren: '../payroll/payroll.module#PayRollModule', canActivate: [AuthGuard] },
        { path: 'sucursales', loadChildren: '../company/company.module#CompanyModule', canActivate: [AuthGuard] }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructRoutingModule { }
