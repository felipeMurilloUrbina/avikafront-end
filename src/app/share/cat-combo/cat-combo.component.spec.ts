import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatComboComponent } from './cat-combo.component';

describe('CatComboComponent', () => {
  let component: CatComboComponent;
  let fixture: ComponentFixture<CatComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
