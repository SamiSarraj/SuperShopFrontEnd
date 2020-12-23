import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountAccountComponent } from './myaccount-account.component';

describe('MyaccountAccountComponent', () => {
  let component: MyaccountAccountComponent;
  let fixture: ComponentFixture<MyaccountAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
