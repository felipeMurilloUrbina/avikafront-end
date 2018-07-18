import { InventariosModule } from './reportes/inventarios/inventarios.module';
import { VentasModule } from './reportes/ventas/ventas.module';
import { EstructuraModule } from './estructura-pagina/estructura.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './login';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    InventariosModule,
    ReactiveFormsModule,
    EstructuraModule,
    ToasterModule.forRoot(),
    VentasModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    HashLocationStrategy, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
