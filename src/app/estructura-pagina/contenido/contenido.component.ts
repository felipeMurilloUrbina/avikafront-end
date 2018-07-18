import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  titulo = '';
  constructor() { }

  ngOnInit() {
  }

  onActivate(event) {
    if (event) {
      this.titulo = event.titulo;
    }
  }

}
