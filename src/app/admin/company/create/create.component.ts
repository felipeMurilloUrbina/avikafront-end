import { Component, OnInit } from '@angular/core';
import { Company } from '../../../_models/company.model';
import { CompanyService } from '../../../_providers/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageStatus } from '../../../_models/message.enum';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CompanyService]
})
export class CreateComponent implements OnInit {
  company: Company;
  constructor(private _router: Router, private _route: ActivatedRoute, private _service: CompanyService) {
    this.company = new Company();
    this._route.params
      .subscribe(params => {
        if (params['id']) {
          this.company.id = params['id'];
          this.get();
        } 
    });
  }

  ngOnInit() {
  }

  get() {
    if (this.company.id) {
      this._service.getSingle(this.company.id).subscribe(data=> {
        this.company = <Company>data;
      });
    }
  }

  save() {
    this._service.save(this.company, '').subscribe(data=> {
      console.log(data);
      this._service.sendMessage(MessageStatus.ok, 'Sucursales', data);
      this.toBack();  
    });
  }

  toBack() {
    this._router.navigate(['//admin/sucursales'], { queryParams: {} });
  }
}
