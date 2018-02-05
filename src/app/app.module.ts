import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from 'app/user.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from 'app/message.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    MessagesComponent //generated automatically with CLI
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
