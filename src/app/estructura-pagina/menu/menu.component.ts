import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../_modelos/usuario';
import { EstructuraService } from '../estructura.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [EstructuraService]
})
export class MenuComponent implements OnInit {
  usuario: Usuario;
  reportes: any[];
  // 
  constructor(private _service: EstructuraService) {
    this.reportes = [{
      nombre: 'Ventas',
      icono: 'fa fa-list nav-icon'
    }];
   }

  ngOnInit() {
  }

}
