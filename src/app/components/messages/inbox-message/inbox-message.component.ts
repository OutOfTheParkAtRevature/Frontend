import { Component, Input, OnInit } from '@angular/core';
// import { RecipientList } from 'src/app/_models/RecipientList';
import { User } from 'src/app/_models/User';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-inbox-message',
  templateUrl: './inbox-message.component.html',
  styleUrls: ['./inbox-message.component.css']
})
export class InboxMessageComponent implements OnInit {

  @Input() recipientList : User;
  constructor( private _message:MessageService ) { }

  ngOnInit(): void {

    
  }
}
