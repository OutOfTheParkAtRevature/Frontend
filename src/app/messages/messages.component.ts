import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { concatMap, map } from 'rxjs/operators';
import { Message } from '../_models/Message';
import { User } from '../_models/User';
import { UserLoggedIn } from '../_models/UserLoggedIn';
import { AccountService } from '../_services/account.service';
import { MessageService } from '../_services/message.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //userLoggedIn:any;
  users:User[] = [];
  //usersArr: any = {};
  //messagesSent:any[] = [];
  //messagesRecieved:any[] = [];
  allMessages:any[] = [];
  //message:any = {}
  //messagesArr: any;
  selectedUserId: string;

  userLoggedIn: UserLoggedIn;
  usersArr: Array<User> = new Array<User>();
  messagesSent: Array<Message> = new Array<Message>();
  messagesRecieved: Array<Message> = new Array<Message>();
  //allMessages: Array<Message> = new Array<Message>();
  message: Message;
  messagesArr: Array<Message> = new Array<Message>();

  constructor(public accountService: AccountService, private userService: UserService, private messagesService: MessageService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
    this.getUsers();
    this.getMessages();
  }

  // Finds the currently logged in user
  getLoggedInUser() {
    this.accountService.currentUser$.subscribe( user$ => {
      this.userLoggedIn = user$;
    })
  }

  // Gets a list of all users in the app
  // Then creates a list of all players that are on the same team as the logged in user
  getUsers() {
    this.userService.getUsers().subscribe( users => {
      this.usersArr = users;
      this.usersArr.forEach(user => {
        if (user.teamID == this.userLoggedIn.teamID) {
          this.users.push(user)
        }
      })
    })
  }

  // Gets a list of messages
  getMessages() {
    this.messagesService.getMessages().subscribe(messages => {
      this.messagesArr = messages;
      this.getRecipients();
    }, err => {
      console.log(err);
    })
  }

  // gets the recipients from the messages
  getRecipients() { 
    let iterations:number = 0;
    this.messagesArr.forEach(message => {
      this.messagesService.getRecipientList(message.recipientListId + "").subscribe(recipients => {
        iterations ++;
        //message.recipient = recipients;
        // this refreshes the message box if a new message is sent
        if(this.selectedUserId && this.messagesArr.length === iterations) {
          this.getMessageBox(this.selectedUserId);
        }
      }, err => {
        console.log(err);
      })
    });
  }  

  // gets a list of the messages between the two users
  getMessageBox(userId) {
    this.selectedUserId = userId;
    this.allMessages = [];
    this.messagesArr.forEach(message => {
      //if (message.senderId === this.userLoggedIn.userID && message.recipient.recipientID === this.selectedUserId) {
      if(message.senderId === this.userLoggedIn.userID && message.recipientListId + "" == this.selectedUserId){
        this.messagesSent.push(message);
        this.allMessages.push({
          msg: message,
          state: 'sent'
        });
      } 
      //if (message.senderId === this.selectedUserId && message.recipient.recipientID === this.userLoggedIn.userID) {
      if(message.senderId === this.userLoggedIn.userID && message.recipientListId + "" == this.selectedUserId){
        this.messagesRecieved.push(message);
        this.allMessages.push({
          msg: message,
          state: 'recieved'
        });
      }
    });
  }

  sendMessage() {
    this.message.senderId = this.userLoggedIn.userID;
    //Ask Anthony how this works?
    //this.message.recipientList = [this.selectedUserId];
    this.messagesService.sendMessage(this.message).subscribe( msg => {
      console.log(msg);
      this.getMessages();
      this.message.messageText = '';
    }, err => {
      console.log(err);
    })
  }

}
