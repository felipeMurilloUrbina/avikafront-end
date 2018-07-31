import { Component, OnInit } from '@angular/core';
import { StructService } from '../struct.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-menu-empleado',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [StructService]
})
export class MenuComponent implements OnInit {
  usuario: any;
  helper: any;
  // 
  constructor(private _service: StructService) {
    this.helper = new JwtHelperService();
    const token= localStorage.getItem('token');
    if(token)
      this.usuario = this.helper.decodeToken(token);
  }

  ngOnInit() {
  }
}
