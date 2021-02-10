import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoggedIn } from 'src/app/_models/UserLoggedIn';
import { UserLoggingIn } from 'src/app/_models/UserLoggingIn';
import { AccountService } from 'src/app/_services/account.service';
import { UserService } from 'src/app/_services/user.service';
=======
import { UserLoggedIn } from 'src/app/_models/UserLoggedIn';
import { UserLoggingIn } from 'src/app/_models/UserLoggingIn';
>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf

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


<<<<<<< HEAD
  constructor(public accountService: AccountService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {

  }

  login() {
      /*
    this.accountService.login(this.model).subscribe( res => {
      console.log(res);
      this.router.navigate([''])
    }, err => {
      console.log(err);
    });
    */

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
  }

  logout() {
    this.accountService.logout();
    this.router.navigate([''])
  }

=======
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
>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf

}
