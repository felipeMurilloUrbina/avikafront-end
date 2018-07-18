import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HashLocationStrategy } from '@angular/common';
import { EstructuraComponent } from './estructura-pagina/estructura/estructura.component';
import { EstructuraModule } from './estructura-pagina/estructura.module';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', loadChildren: './estructura-pagina/estructura.module#EstructuraModule' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
