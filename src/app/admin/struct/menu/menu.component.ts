import { Component, OnInit } from '@angular/core';
import { EstructuraService } from '../struct.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [EstructuraService, JwtHelperService]
})
export class MenuComponent implements OnInit {
  usuario: any;
  helper: any;
  // 
  constructor(private _service: EstructuraService) {
    this.helper = new JwtHelperService();
    const token= localStorage.getItem('token');
    this.usuario = this.helper.decodeToken(token);
  }

  ngOnInit() {
  }

}
