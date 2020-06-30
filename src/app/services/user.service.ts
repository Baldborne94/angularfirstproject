import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import {IUser} from '../interfaces/user.interfaces'
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public get(id: number) {
    return this._http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      map(user => new User(user.id, user.name, user.username, user.name))
    );
  }

  public userList(): Observable<User[]>{
    return this._http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(users => users.map(user => new User(user.id, user.name, user.email, user.username))))
    
  }
}
