import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoggedIn } from '../../_models/UserLoggedIn';
import { UserLoggingIn } from '../../_models/UserLoggingIn';
import { AccountService } from '../../_services/account.service';
import { UserService } from '../../_services/user.service';
import { Notification } from '../../_models/Notification';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: UserLoggingIn = {
    username: null,
    password: null
  };

  model2: UserLoggedIn = {
    id: null, userName: null, fullName: null, phoneNumber: null, 
    email: null, teamID: null, roleName:null, token:null//roleID: null
  };

  public notifications: Array<Notification> = new Array<Notification>();
  public hasNotifications: boolean;
  public viewNotifications: boolean;

  constructor(public accountService: AccountService, private router: Router, private userService: UserService) { }

  ngOnInit(): void 
  {
    this.getNotifications();
  }

  getNotifications(): void
  {
    //this.notificationService.signalRecieved.subscribe((data: Notification) => { this.notifications.push(data); });
    let x = new Notification();
    x.message = "You've got mail";
    this.notifications.push(x);
    this.notifications.push(x);
    this.hasNotifications = true;
    this.viewNotifications = false;
  }

  displayNotifications(): void
  {
    if(!this.viewNotifications)
    {
      this.viewNotifications = true;
      this.hasNotifications = false;
    }
    else if(this.viewNotifications)
      this.viewNotifications = false;
    else
      this.viewNotifications = true;
  }


  login() {
      
    this.accountService.login(this.model).subscribe( res => {
      console.log(res);
      this.router.navigate(['']);
    }, err => {
      console.log(err);
    });
    
/*
    //Temp code for mocked backend
   this.userService.getUsers().subscribe
   (
    (data) => 
    {
        let matchFound: boolean = false;
        for(let x = 0; x < data.length; x++)
        {
            if(data[x].userName == this.model.username
                && data[x].password == this.model.password)
            {
                this.accountService.setCurrentUser(data[x]);
                this.router.navigate(['']);
                matchFound = true;
                break;
            }
        }
        //No match found
        if(!matchFound) alert("Wrong username or password");
    },
    (err) => console.log(err)
   );
   */
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['']);

    //Notifications
    this.notifications = new Array<Notification>();
    this.hasNotifications = false;
    this.viewNotifications = false;
  }
}
