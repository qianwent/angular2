import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user';
import { MOCKUSERS } from 'app/mock/mock_users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //initialize single object
  user : User = {
    id: 1,
    name: "Wentao Qian",
  };

  users = MOCKUSERS;

  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
    console.log('user: ' + user + ' is clicked!');
  }

  constructor() {
   }

  ngOnInit() {
  }

}
