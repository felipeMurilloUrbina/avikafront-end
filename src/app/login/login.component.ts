import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MessageStatus } from '../_models/message.enum';
import { AuthenticationService } from '../_providers';
import { User } from '../_models/user';
 declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  tituloBoton = 'Entrar';
  titulo: String = 'Iniciar Sesion';
  sucursales = [];
  sucursalId = '';
  isBlocked =  false;
  usuario: User;
  constructor(private router: Router, private _fb: FormBuilder, private servicio: AuthenticationService) {
    localStorage.removeItem('token');
  }

  ngOnInit() {
    this.usuario = new User();
  }

  // Evento para activar metodo login cuando se presiona enter.
  keydown(event) {
    if (event === 13) {
      this.login();
    }
  }
  // Metodo valida el usuario y contraseña y consume end point para obtener token.
  login() {
    if (this.sucursales.length > 0) {
      localStorage.setItem('sucursal', this.usuario.companyId.toString());
      this.router.navigate(['/admin']);
    }
    // Valida si la contraseña esta vacia.
    if ((!this.usuario.password) || (this.usuario.password === '')) {
      $('#msg-contra').addClass('alert-validate');
      return false;
    }
    this.servicio.show();
    this.servicio.login(this.usuario).subscribe(data => {
      this.servicio.hide();
      const helper = new JwtHelperService();
      const token= localStorage.getItem('token');
      const decodedToken = helper.decodeToken(token);
      switch(decodedToken.role) {
        case 'Administrador':
          this.router.navigate(['/admin']);
        break;
        case 'Empleado':
          this.router.navigate(['/empleado']);
        break;
        case 'Cliente':
          this.router.navigate(['/cliente']);
        break;
      }
    }, error => {
      console.log(error);
      // this.servicio.hide();
    });
  }
}
