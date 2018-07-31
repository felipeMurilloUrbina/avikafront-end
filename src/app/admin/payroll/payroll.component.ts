import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
export interface Nomina {
  id: number;
  descripcion: string;
  rfc: string;
  fecha: string;
}
const ELEMENT_DATA: Nomina[] = [
  { id: 1, descripcion: 'General', rfc: 'XAXA-010101-000', fecha: '14/07/2018' },
  { id: 2, descripcion: 'Felipe Murillo', rfc: 'MUUF-880925-NW3', fecha: '14/07/2018'},
  { id: 3, descripcion: 'Pito Perez', rfc: 'BUXC-857425-KW2', fecha: '14/07/2018'},
  { id: 4, descripcion: 'Rosa Alvarez', rfc: 'HCK-857885-JU3', fecha: '14/07/2018'},
  { id: 5, descripcion: 'Luis Garcia', rfc: 'LOPZ-335454-777', fecha: '14/07/2018'},
  { id: 6, descripcion: 'Juan Lopez', rfc: 'KULE-9393993-NE3', fecha: '14/07/2018'}
];
@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayRollComponent implements OnInit {
  titulo = 'Nominas';
  displayedColumns: string[] = ['id', 'descripcion', 'rfc', 'fecha'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
