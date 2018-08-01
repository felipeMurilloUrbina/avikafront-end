import { Component, OnInit } from '@angular/core';
import { Company } from '../../../_models/company.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  company: Company;
  constructor() {
    this.company = new Company();
   }

  ngOnInit() {
  }

}
