
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './login';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ErrorInterceptor } from './_helpers';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material';
import { Traducir } from './_helpers/translate.intl';

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
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MatPaginatorIntl, useValue: Traducir() },
    { provide: Location, useClass: HashLocationStrategy },
    HttpClient, HashLocationStrategy, ToasterService],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
