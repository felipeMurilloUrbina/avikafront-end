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
  users: User[];
  cols: any[];
  isLoad = false;
  constructor(private _service : UserService) {
    _service.getAll(1,2).subscribe(users => {
      // let us= <User[]>users;
      // this.dataSource = new MatTableDataSource(users);
    });
   }

  ngOnInit() {
  }
}
