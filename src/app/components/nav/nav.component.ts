import { Component, OnInit } from '@angular/core';
import { UserLoggedIn } from 'src/app/_models/UserLoggedIn';
import { UserLoggingIn } from 'src/app/_models/UserLoggingIn';

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
    userID: null, userName: null, fullName: null, phoneNumber: null, 
    email: null, teamID: null, roleID: null
  };


  constructor() { }

  ngOnInit(): void {
  }

  // login() {
  //   this.accountService.login(this.model).subscribe( res => {
  //     console.log(res);
  //     this.router.navigate([''])
  //   }, err => {
  //     console.log(err);
  //   });
  // }

  // logout() {
  //   this.accountService.logout();
  //   this.router.navigate([''])
  // }

}
