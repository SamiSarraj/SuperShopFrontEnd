import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountSidebarComponent } from './myaccount-sidebar.component';

describe('MyaccountSidebarComponent', () => {
  let component: MyaccountSidebarComponent;
  let fixture: ComponentFixture<MyaccountSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
