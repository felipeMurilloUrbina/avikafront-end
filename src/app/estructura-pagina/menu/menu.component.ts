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
  menuAdmin: any[];
  menuUsuario: any[];
  // 
  constructor(private _service: EstructuraService) {

  }

  ngOnInit() {
  }

}
