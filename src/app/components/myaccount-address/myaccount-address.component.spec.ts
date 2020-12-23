import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountAddressComponent } from './myaccount-address.component';

describe('MyaccountAddressComponent', () => {
  let component: MyaccountAddressComponent;
  let fixture: ComponentFixture<MyaccountAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
