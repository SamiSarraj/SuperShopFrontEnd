import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountDashboardComponent } from './myaccount-dashboard.component';

describe('MyaccountDashboardComponent', () => {
  let component: MyaccountDashboardComponent;
  let fixture: ComponentFixture<MyaccountDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
