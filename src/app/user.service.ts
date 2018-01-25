import { Injectable } from '@angular/core';
import { User } from 'app/model/user';
import { MOCKUSERS } from 'app/mock/mock_users';

@Injectable()
export class UserService {

  getUsers(): User[] {
    return MOCKUSERS;
  }

  constructor() { }

}
