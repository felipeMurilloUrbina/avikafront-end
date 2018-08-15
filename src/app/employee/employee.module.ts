import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FooterComponent } from './struct/footer/footer.component';
import { HeaderComponent } from './struct/header/header.component';
import { ContentComponent } from './struct/content/content.component';
import { MenuComponent } from './struct/menu/menu.component';
import { StructEmployeeComponent } from './struct/struct/struct.component';

@NgModule({
  declarations:[
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    StructEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeRoutingModule
  ],
  exports: [StructEmployeeComponent, HomeComponent],
  providers:[HttpClient]
})
export class EmployeeModule { }
