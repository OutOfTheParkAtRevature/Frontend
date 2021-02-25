import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RecipientList } from 'src/app/_models/RecipientList';
import { User } from 'src/app/_models/User';
import { UserInbox } from 'src/app/_models/UserInbox';
import { MessageService } from 'src/app/_services/message.service';
import { UserService } from 'src/app/_services/user.service';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { Inbox } from 'src/app/_models/inbox';
import { Recipient } from 'src/app/_models/recipient';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Message } from 'src/app/_models/Message';
import { AccountService } from '../../_services/account.service';
import { UserLoggedIn } from 'src/app/_models/UserLoggedIn';
import { debug } from 'console';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  
})
export class MessagesComponent implements OnInit {

  userLogged: UserLoggedIn; 
  users:User[];
  userInbox: Array<UserInbox> = [];
  isNewConversation: boolean = false;
  InboxDescription: UserInbox;
  userNewGroup = { "recipients": [] };
  allMessages: Array<Message> = [];
  userMessage: string = "";

  @ViewChild('txtUserMessage') txtUserMessage: ElementRef;
  @ViewChild('divChatMessage') divChatMessage: ElementRef;

  selectedUserId: string;

  constructor( private _message: MessageService, private _users: UserService, private modalService: NgbModal, config: NgbModalConfig, public accountService: AccountService) 
  {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

    if (this.accountService.currentUser$) {
      this.getLoggedInUser();
    }
    
    this.getAvailableToChat();
    this.getInboxFromUser();
    this.GetCarpoolInbox();
    // this.getMessages();

    // this._message.getUserInboxes().subscribe(  dataOnSuccess  =>
    //   {
    //     console.log("response successfully",dataOnSuccess);
    //     this.recipientLists = dataOnSuccess;

    //     // this._message.getRecipientList

    //   },
    //   dataOnError => {
    //     console.log(dataOnError);
    //   }
    // )


     // Gets a list of all users in the app
  // Then creates a list of all players that are on the same team as the logged in user

    /* SignalR Http setup from Service...*/
  // this._message.startConnection();
  // this._message.addTransferChartDataListener();   
  // this.startHttpRequest()
}
// // SignalR http
// private startHttpRequest = () => {
//   this.http.get('https://localhost:5001/api/chart')
//     .subscribe(res => {
//       console.log(res);
//     })
// }

  getInboxFromUser() {

    this._message.getMessages(1).subscribe( UserInboxes => {
      // console.log(UserInboxes); 

      this.userInbox = UserInboxes.inboxes;
      
      /** Review if the gateway can return only for the selected league */

      // this.usersArr.forEach(user => {
      //   if (user.teamID == this.userLoggedIn.teamID) {
      //     this.users.push(user)
      //   }
      // })
    });
  }

  //Get the users available to begin a conversation in the league
  getAvailableToChat():void {

    this._users.getUsers().subscribe(
      usersData => {
        this.users = usersData;
      },
      dataOnError => {

      }
    );
  }

  getMessagesFromConversation( messageID: string ): void
  {
    this.allMessages = [];
    this._message.getMessagesFromConversation(messageID).subscribe(
      dataOnSuccess => {
        console.log(dataOnSuccess);

        this.allMessages=dataOnSuccess.content;
      },
      dataOnError=> {
        console.log(dataOnError);
      }
    );
  }


  OpenInbox(inbox: UserInbox) :void {
    console.log("Selected!", inbox);

    this.InboxDescription = inbox;
    inbox.isRead = false;

    //Load conversation when user clicks... 
    this.getMessagesFromConversation(inbox.messageID);
    //User comments display at rigth...

    // The first time it doesn't work, because the div element is not created at the moment.
    this.AutoFocusOnBottom();

    this.userMessage = "";

  }

  AutoFocusOnBottom(): void {
    //Some times this doesn't go to the last element inserted.
    try{
      this.divChatMessage.nativeElement.scrollTop = this.divChatMessage.nativeElement.scrollHeight;
    }
    catch{}
  }

  GetCarpoolInbox(): void{
    console.log("Get carpool inbox");

    let CarpoolInbox:UserInbox = new UserInbox();
    CarpoolInbox.userID = "1000";
    CarpoolInbox.recipients = [];

    

    this.userInbox.push(CarpoolInbox);
    // console.log(this.userInbox);
  }

  CreateNewInboxDialog(content): void{
    this.modalService.open(content); // { size: 'lg' }
  }

  CloseModal () {
    this.userNewGroup.recipients = [];
    this.modalService.dismissAll('Close click') 
  }

  onChangeUser(event, user)
  {
    // console.log(event, user);

    if(event.target.checked)
    {
      //Add to a list for new group, indexOf reviews if its unique
      if (this.userNewGroup.recipients.indexOf(user) === -1)
      {
        this.userNewGroup.recipients.push(user)
      }

    }
    else{
      //Removed the checkbox, indexOf reviews if its unique
        this.userNewGroup.recipients.splice( this.userNewGroup.recipients.indexOf(user), 1)
    }

    console.log(this.userNewGroup);

  }

  CreateNewInbox(){
    //Send to the service the new group.

    console.log("Group created successfully", this.userNewGroup);

    //Create new inbox logic
    let newGroup: UserInbox = new UserInbox();
    newGroup.userID = "1"; //Later review userID

    this.userNewGroup.recipients.forEach(user => {

      let recipient:Recipient = new Recipient();
      recipient.userID = user.id;
      recipient.fullName = user.fullName;
      
      newGroup.recipients.push( recipient );
    });

    //Verify if the group doesn't exists in the userInbox
    // debugger;
    // let inboxCount: number = this.userInbox.length;
    // let usersAlreadyInChat: number = 0;
    // let groupAlreadyCreated = this.userInbox.find( element => 
    //   {
    //     console.log("element.recipients => ",element.recipients, "newGroup.recipients => ", newGroup.recipients);
    //     return element.recipients.find( recipientElement => newGroup.recipients.find( groupRecipient => groupRecipient.userID == recipientElement.userID ) );
    //   }); //element.recipients == newGroup.recipients 

    // console.log(groupAlreadyCreated);

    // //if its undefined, it is a new conversation, submit and display the new group, if else, it is already created.
    // if (groupAlreadyCreated != undefined)
    // {
      
    // }

    // console.log(groupAlreadyCreated);
    console.log("New Group =>",newGroup);
    //Post service
    //refresh array
    this.userInbox.push(newGroup);

    this.OpenInbox(newGroup);
    
    this.CloseModal();

  }

  onKeyEnter( event: KeyboardEvent ):void {
    if (event.key === "Enter")
    {
      event.preventDefault();
      // console.log(event);

      this.UploadMessage();
    }
  }
  
  UploadMessage(): void
  {
    //Upload message...
  
    //Display the message 
    let myMessage: Message = new Message ();
    myMessage.body = this.userMessage;
    myMessage.date = new Date(); 
    myMessage.senderName = "some dude"// this.userLogged.fullName
    myMessage.senderID = "1"; //this.userLogged.id+ ""
    this.allMessages.push(myMessage);
    
    
    //Clear the message
    this.userMessage = "";
    
    this.txtUserMessage.nativeElement.focus();

    this.AutoFocusOnBottom();
  }

  /** Get logged in user */
  getLoggedInUser() {
    this.accountService.currentUser$.subscribe( user => {
      this.userLogged = user;
    });
  }

}
