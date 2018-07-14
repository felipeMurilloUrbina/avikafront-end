import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy } from '@angular/common';
import { EstructuraComponent } from './estructura-pagina/estructura/estructura.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', component: EstructuraComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: HashLocationStrategy })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
