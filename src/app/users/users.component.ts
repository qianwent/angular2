import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user';
import { UserService } from 'app/user.service';
// import { MOCKUSERS } from 'app/mock/mock_users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //initialize single object
  // user : User = {
  //   id: 1,
  //   name: "Wentao Qian",
  // };

  // users = MOCKUSERS;

  //use service to fetch user data
  users : User[];

  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
    console.log('user: ' + user + ' is clicked!');
  }

  constructor(private userService: UserService) {
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
    this.getUsers();//don't forget () to execute the function
  }

}
