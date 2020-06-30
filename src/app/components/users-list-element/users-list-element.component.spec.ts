import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListElementComponent } from './users-list-element.component';

describe('UsersListElementComponent', () => {
  let component: UsersListElementComponent;
  let fixture: ComponentFixture<UsersListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
