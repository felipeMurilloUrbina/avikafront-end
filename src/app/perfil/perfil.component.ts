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
    // const helper = new JwtHelperService();
    //                 const decodedToken = helper.decodeToken(localStorage.getItem('token'));
    //                 const expirationDate = helper.getTokenExpirationDate(localStorage.getItem('token'));
    //                 const isExpired = helper.isTokenExpired(localStorage.getItem('token'));
    //                 console.log(decodedToken);
  }

  getFolder(e) {
    console.log(e);
    for (var i = 0; i < e.target.files.length; i++) {
      var s = e.target.files[i].name + '\n';
      s += e.target.files[i].size + ' Bytes\n';
      s += e.target.files[i].type;
      alert(s);
    }
  }
}
