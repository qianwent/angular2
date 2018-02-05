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
    //this.users = this.userService.getUsers();
    // this.userService.getUsers().subscribe(users => this.users = users);
    // 不要在意lambda表达式的输入，重名可能会引起一些误解，但要知道这个表达式已经在方法里了，自然可以直接把getUsers方法return的值当做输入
    this.userService.getUsers().subscribe(a => this.users = a);
  }

  ngOnInit() {
    this.getUsers();//don't forget () to execute the function
  }

}
