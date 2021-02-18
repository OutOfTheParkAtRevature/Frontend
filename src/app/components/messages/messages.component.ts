import { Component, OnInit } from '@angular/core';
import { RecipientList } from 'src/app/_models/RecipientList';
import { User } from 'src/app/_models/User';
import { UserInbox } from 'src/app/_models/UserInbox';
import { MessageService } from 'src/app/_services/message.service';
import { UserService } from 'src/app/_services/user.service';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  
})
export class MessagesComponent implements OnInit {

  userLoggedIn:any;
  users:User[];

  userNewGroup = { "Recipients": [] };

  messagesSent:any[] = [];
  messagesRecieved:any[] = [];

  allMessages:any[] = [];

  message:any = {}

  messagesArr: any;

  selectedUserId: string;

  constructor( private _message: MessageService, private _users: UserService, private modalService: NgbModal, config: NgbModalConfig,) 
  {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

    // this.getLoggedInUser();
    this.getUsersFromSameLeague();
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
}

  //InboxListDTO
  getUsersFromSameLeague() {
    this._users.getUsers().subscribe( users => {
      this.users = users;
      
      /** Review if the gateway can return only for the selected league */

      // this.usersArr.forEach(user => {
      //   if (user.teamID == this.userLoggedIn.teamID) {
      //     this.users.push(user)
      //   }
      // })
    })
  }

  OpenInbox(user: User) :void {
    console.log("Selected!", user)
  }

  GetCarpoolInbox(): void{

    console.log("Get carpool inbox");
  }

  CreateNewInboxDialog(content): void{

    this.modalService.open(content); // { size: 'lg' }
  }

  CloseModal () {
    this.userNewGroup.Recipients = [];
    this.modalService.dismissAll('Close click') 
  }

  onChangeUser(event, user)
  {
    // console.log(event, user);

    if(event.target.checked)
    {
      //Add to a list for new group, indexOf reviews if its unique
      if (this.userNewGroup.Recipients.indexOf(user) === -1)
      {
        this.userNewGroup.Recipients.push(user)
      }

    }
    else{
      //Removed the checkbox, indexOf reviews if its unique
        this.userNewGroup.Recipients.splice( this.userNewGroup.Recipients.indexOf(user), 1)
    }

    console.log(this.userNewGroup);

  }

  CreateNewInbox(){
    //Send to the service the new group.

    this.modalService.dismissAll('Close click') 
  }

}
