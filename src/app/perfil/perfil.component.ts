import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const helper = new JwtHelperService();
                    const decodedToken = helper.decodeToken(localStorage.getItem('token'));
                    const expirationDate = helper.getTokenExpirationDate(localStorage.getItem('token'));
                    const isExpired = helper.isTokenExpired(localStorage.getItem('token'));
                    console.log(decodedToken);
  }

}
