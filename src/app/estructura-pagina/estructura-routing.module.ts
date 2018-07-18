import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstructuraComponent } from './estructura/estructura.component';
import { AuthGuard } from '../_guards';

const routes: Routes = [
    {
      path: '', component: EstructuraComponent,
      children: [
        { path:'', redirectTo: 'departamentos', pathMatch: 'full' },
        { path: 'categorias', loadChildren: '../admin/categoria/categoria.module#CategoriaModule', canActivate: [AuthGuard] },
        { path: 'departamentos', loadChildren: '../admin/departamento/departamento.module#DepartamentoModule', canActivate: [AuthGuard] },
        { path: 'usuarios', loadChildren: '../admin/usuario/usuario.module#UsuarioModule', canActivate: [AuthGuard] },
        { path: 'noticias', loadChildren: '../admin/noticia/noticia.module#NoticiaModule', canActivate: [AuthGuard] },
        { path: 'nominas', loadChildren: '../admin/nomina/nomina.module#NominaModule', canActivate: [AuthGuard] },
        { path: 'sucursales', loadChildren: '../admin/sucursal/sucursal.module#SucursalModule', canActivate: [AuthGuard] },
        { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilModule', canActivate: [AuthGuard]}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstructuraRoutingModule { }
