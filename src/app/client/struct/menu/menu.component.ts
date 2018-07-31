import { Component, OnInit } from '@angular/core';
import { EstructuraService } from '../estructura.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [EstructuraService]
})
export class MenuComponent implements OnInit {
  usuario: any;
  helper: any;
  // 
  constructor(private _service: EstructuraService) {
    this.helper = new JwtHelperService();
    const token= localStorage.getItem('token');
    if(token)
      this.usuario = this.helper.decodeToken(token);
  }

  ngOnInit() {
  }

}
