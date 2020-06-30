import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators'
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { ITodo } from '../interfaces/todo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  public list(): Observable<Todo[]> {
    return this._http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map(data => data.map(t => new Todo(t.id, t.title, t.completed)).filter(t=>t.id%2 &&t.id<20))
    );
  }
  
}
