import { VentasModule } from './../reportes/ventas/ventas.module';
import { ContenidoComponent } from './contenido/contenido.component';
import { MenuComponent } from './menu/menu.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { EstructuraComponent } from './estructura/estructura.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PiePaginaComponent } from './pie-pagina';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InventariosModule } from '../reportes/inventarios/inventarios.module';


@NgModule({
  declarations: [
    ContenidoComponent,
    EstructuraComponent,
    EncabezadoComponent,
    MenuComponent,
    PiePaginaComponent
  ],
  imports: [
    VentasModule,
    InventariosModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [EstructuraComponent],
  providers: [HttpClient]
})
export class EstructuraModule { }
