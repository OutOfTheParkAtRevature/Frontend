import { Component, Input, OnInit } from '@angular/core';
import { Inbox } from 'src/app/_models/inbox';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-inbox-message',
  templateUrl: './inbox-message.component.html',
  styleUrls: ['./inbox-message.component.css']
})
export class InboxMessageComponent implements OnInit {

  @Input() Inbox : Inbox;
  constructor( private _message:MessageService ) { }

  ngOnInit(): void {

    
  }
}
