import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoggedIn } from '../_models/UserLoggedIn';
import { UserLoggingIn } from '../_models/UserLoggingIn';
import { AccountService } from '../_services/account.service';
import { UserService } from '../_services/user.service';

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
        for(let x = 0; x < data.length; x++)
        {
            if(data[x].userName == this.model.username
                && data[x].password == this.model.password)
            {
                this.accountService.setCurrentUser(data[x]);
                this.router.navigate(['']);
                break;
            }
        }
        //No match found
        alert("Wrong username or password");
    },
    (err) => console.log(err)
   );
  }

  logout() {
    this.accountService.logout();
    this.router.navigate([''])
  }


}
