import { Component, OnInit } from '@angular/core';
import{User} from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users: User[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.userList().subscribe(users=>this.users = users);
  }

}
