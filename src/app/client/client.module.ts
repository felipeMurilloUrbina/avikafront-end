import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ClientRoutingModule } from './client-routing.module';
import { StructClientComponent } from './struct/struct/struct.component';
import { ContentComponent } from './struct/content/content.component';
import { HeaderComponent } from './struct/header/header.component';
import { FooterComponent } from './struct/footer/footer.component';
import { MenuComponent } from './struct/menu/menu.component';

@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    StructClientComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientRoutingModule
  ],
  exports: [StructClientComponent],
  providers:[HttpClient]
})
export class ClientModule { }
