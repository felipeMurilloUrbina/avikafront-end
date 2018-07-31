import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
export interface Noticia {
  id: number;
  titulo: string;
  fecha: string;
}
const ELEMENT_DATA: Noticia[] = [
  { id: 1, titulo: 'Noticia Inauracion',  fecha: '14/07/2018' },
  { id: 2, titulo: 'Descuentos a partir de agosto', fecha: '14/07/2018'},
  { id: 3, titulo: 'Noticia de altruista', fecha: '14/07/2018'}
];
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  title = 'Noticias';
  displayedColumns: string[] = ['id', 'titulo', 'fecha'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
