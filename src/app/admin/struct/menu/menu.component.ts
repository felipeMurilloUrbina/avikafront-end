import { AuthenticationService } from './../../../_providers/authentication.service';
import { Component, OnInit } from '@angular/core';
import { EstructuraService } from '../struct.service';
import { JwtHelperService } from '@auth0/angular-jwt';
declare var $: any;

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
  constructor(private _service: EstructuraService, private _serviceAuthenticate: AuthenticationService) {
    this.helper = new JwtHelperService();
    const token= localStorage.getItem('token');
    this.usuario = this.helper.decodeToken(token);
  }

  ngOnInit() {
  }

  logout() {
    this._serviceAuthenticate.logout();
  }
  openMenu(event) {
    $('#catalogs').removeClass('menu-open');
    $('#menu').addClass('');
  }

}
