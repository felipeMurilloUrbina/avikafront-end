import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptComboComponent } from './dept-combo.component';

describe('DeptComboComponent', () => {
  let component: DeptComboComponent;
  let fixture: ComponentFixture<DeptComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
