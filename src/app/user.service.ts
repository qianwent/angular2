import { Injectable } from '@angular/core';
import { User } from 'app/model/user';
import { MOCKUSERS } from 'app/mock/mock_users';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from 'app/message.service';

@Injectable()
export class UserService {

  //make it asynchronous 
  getUsers(): Observable<User[]> {
    this.messageService.add('message service get called, after fetching users.')
    return of(MOCKUSERS);
  }

  constructor(private messageService: MessageService) { }

}
