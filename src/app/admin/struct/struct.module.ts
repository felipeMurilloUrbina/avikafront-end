import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StructComponent } from './struct/struct.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StructRoutingModule } from './struct-routing.module';


@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    StructComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    StructRoutingModule,
    HttpClientModule,
  ],
  exports: [StructComponent],
  providers: [HttpClient]
})
export class StructModule { }
