import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  public todos: Todo[] = [];

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this._todoService.list().subscribe(todos => this.todos = todos);
  }

}
