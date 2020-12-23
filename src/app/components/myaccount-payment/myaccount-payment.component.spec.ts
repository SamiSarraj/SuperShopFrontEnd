import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountPaymentComponent } from './myaccount-payment.component';

describe('MyaccountPaymentComponent', () => {
  let component: MyaccountPaymentComponent;
  let fixture: ComponentFixture<MyaccountPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
