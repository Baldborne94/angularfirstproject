import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-list-element',
  templateUrl: './users-list-element.component.html',
  styleUrls: ['./users-list-element.component.scss']
})
export class UsersListElementComponent implements OnInit {
  public user: User;

  constructor(private _route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(
      params => this._userService.get(+params.get('id')).subscribe(user => this.user = user)
    );
  }

}
