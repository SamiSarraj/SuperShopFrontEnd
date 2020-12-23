import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountOrdersComponent } from './myaccount-orders.component';

describe('MyaccountOrdersComponent', () => {
  let component: MyaccountOrdersComponent;
  let fixture: ComponentFixture<MyaccountOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
