import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  titulo = 'Departamentos';
  constructor() { 
    console.log('0');
  }

  ngOnInit() {
  }

}
