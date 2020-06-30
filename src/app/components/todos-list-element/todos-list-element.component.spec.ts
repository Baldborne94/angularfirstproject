import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosListElementComponent } from './todos-list-element.component';

describe('TodosListElementComponent', () => {
  let component: TodosListElementComponent;
  let fixture: ComponentFixture<TodosListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
