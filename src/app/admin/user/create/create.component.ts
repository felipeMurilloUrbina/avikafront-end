import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  titulo ='Nuevo Usuario';
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
  }

}
