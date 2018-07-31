import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ButtonsVisible } from '../../_models/button-visible.model';
import { CategoryService } from '../../_providers/category.service';
import { Category } from '../../_models/category.model';
import { MessageStatus } from '../../_models/message.enum';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  title = 'Departamentos';
  buttons: ButtonsVisible;
  cols: any[];
  categories: Category[]= [];
  selectedCategory: Category;
  modifiedCategory: Category;
  displayDialog: boolean;
  isNew: boolean;
  isLoad= false;
  qty = 0;
  titleDialog = 'Nuevo Categoria';
  constructor(private _service: CategoryService) {
    this.cols = [
        { field: 'id', header: 'Codigo' },
        { field: 'description', header: 'Descripcion' },
      ]; 
    this.buttons = new ButtonsVisible();
  }

  ngOnInit() {
    this.get();
  }

  get() {
    this._service.getAll(1, this.qty).subscribe((data)=> {
      this.categories = (<Category[]>data['items']);
      this._service.hide();
      this.isLoad = true;
    });
  }

  edit(Category) {
    this.titleDialog= 'Editar Categoria';    
    this.isNew = false;
    this.selectedCategory= <Category>Category;
    this.modifiedCategory = this.clone(Category);
    this.displayDialog = true;
  }
  
  delete(Category) {
    this.titleDialog= 'Eliminar Categoria';
    this.buttons.buttonDelete = true;
    this.buttons.buttonSave = false;
    this.modifiedCategory= Category;
    this.displayDialog = true;
  }

  deleteConfirm() {
    this._service.delete(this.modifiedCategory.id).subscribe(data => {
      this._service.sendMessage(MessageStatus.ok, 'Información', data);
      let index = this.categories.indexOf(this.modifiedCategory);
      this.categories.splice(index, 1);
      this.clean();
    });
  }

  new() {
    this.isNew = true;
    this.titleDialog= 'Nuevo Departamento';
    this.buttons.buttonSave = true;
    this.modifiedCategory = new Category();
    this.displayDialog = true;
  }

  save() {
    if(this.isNew) {
      this._service.add(this.modifiedCategory, '').subscribe(data=> {
        // this.Categorys.push(this.modifiedCategory);
        this._service.sendMessage(MessageStatus.ok, 'Información', data);
        this.clean();
      });
    } else  {
      this._service.update(this.selectedCategory.id, this.modifiedCategory).subscribe(data=> {
        this.categories[this.categories.indexOf(this.selectedCategory)] = this.modifiedCategory;
        this._service.sendMessage(MessageStatus.ok, 'Información', data);
        this.clean();
      });
    }
  }

  clean() {
    this.displayDialog= false;
    this.modifiedCategory = new Category();
    this.selectedCategory = new Category();
    this.buttons= new ButtonsVisible();
    this.get();
  }

  clone(d: Category): Category {
    let category = new Category();
    for (let prop in d) {
      category[prop] = d[prop];
    }
    return category;
  }
}
