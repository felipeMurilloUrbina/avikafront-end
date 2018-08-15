import { Component, OnInit } from '@angular/core';
import { Company } from '../../_models/company.model';
import { CompanyService } from '../../_providers/company.service';
import { ButtonsVisible } from '../../_models/button-visible.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {
  title = 'Sucursales';
  companies: Company[];
  cols: any[];
  isLoad = false;
  buttons: ButtonsVisible;

  constructor(private _service: CompanyService) {
    this.cols = [
      { field: 'id', header: 'Codigo' },
      { field: 'code', header: 'Clave' },
      { field: 'description', header: 'Descripcion' },
    ]; 
    this.buttons = new ButtonsVisible();
  }

  ngOnInit() {
    this._service.getAll(1,20).subscribe(data => {
      this.companies = <Company[]>data['items'];
      this.isLoad = true;
      this._service.hide();
    });
  }

}
