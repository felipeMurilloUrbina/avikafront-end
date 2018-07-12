import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy } from '@angular/common';
import { EstructuraComponent } from './estructura-pagina/estructura/estructura.component';
const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: EstructuraComponent },
  { path: '**', redirectTo: 'admin' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: HashLocationStrategy })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
