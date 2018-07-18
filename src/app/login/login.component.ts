import { AuthenticationService } from './../_servicios/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajeEstatus } from '../_modelos/mensaje.enum';
import { Usuario } from '../_modelos/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';
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
  usuario: Usuario;
  constructor(private router: Router, private _fb: FormBuilder, private servicio: AuthenticationService) {
    localStorage.removeItem('token');
  }

  ngOnInit() {
    this.usuario = new Usuario();

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
      localStorage.setItem('sucursal', this.usuario.sucursalId.toString());
      this.router.navigate(['/admin']);
    }
    // Valida si la contraseña esta vacia.
    if ((!this.usuario.password) || (this.usuario.password === '')) {
      $('#msg-contra').addClass('alert-validate');
      return false;
    }
    this.servicio.activarEsperando();
    this.servicio.login(this.usuario).subscribe(data => {
      this.servicio.cerrarEsperando();
      this.router.navigate(['/admin']);
    }, error => {
      this.servicio.cerrarEsperando();
      this.servicio.enviarMensaje(MensajeEstatus.error, 'Error de sesion', error.error_description);
    });
  }
}
