import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '../../_models/user';
import { UserService } from '../../_providers/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  title = 'Usuarios';
  displayedColumns: string[] = ['id', 'fullName', 'tipo', 'tipo'];
  dataSource: any;
  constructor(private servicio: UserService) {
    servicio.getAll(1,2).subscribe(users => {
      // let us= <User[]>users;
      // this.dataSource = new MatTableDataSource(users);
    });
   }

  ngOnInit() {
  }
}
