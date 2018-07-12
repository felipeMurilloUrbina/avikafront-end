import { InventariosModule } from './reportes/inventarios/inventarios.module';
import { VentasModule } from './reportes/ventas/ventas.module';
import { EstructuraModule } from './estructura-pagina/estructura.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    InventariosModule,
    ReactiveFormsModule,
    EstructuraModule,
    VentasModule,
  ],
  providers: [HashLocationStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
