import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  open_chatList = false;
  constructor() { }

  ngOnInit() {
  }

  show_chatList() {
    this.open_chatList = !this.open_chatList ;
  }

}
