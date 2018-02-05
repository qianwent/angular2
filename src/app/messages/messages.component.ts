import { Component, OnInit } from '@angular/core';
import { MessageService } from 'app/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //为什么这里用public？
  //对比user.components，会发现它里面定义的方法才是调用service层的，而对应的表现层的html则是在调用这些component里定义的方法
  //而没有直接调用service层，显然是不用public的
  //这里，看到messages.components里面，则是对service层直接调用，(click)="messageService.clear()，自然需要public
  //反正就先记住规则了，不比深究，毕竟这种demo型的，多数只是一个展示用途，用法不一定科学和常规，就像这种表现层直接调用service层，我感觉正常情况下不该出现
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
