import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../_models/Team';
import { User } from '../_models/User';
import { UserLoggedIn } from '../_models/UserLoggedIn';
import { UserLoggingIn } from '../_models/UserLoggingIn';
import { AccountService } from '../_services/account.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public accountService: AccountService, private userService: UserService, private router: Router) { }

  user: UserLoggedIn; 
  //team:any = {};
  model:any = {};
  team: Team;
  //model: UserLoggingIn;

  ngOnInit(): void {
    if (this.accountService.currentUser$) {
      this.getLoggedInUser();
    }
  }

  getLoggedInUser() {
    this.accountService.currentUser$.subscribe( user => {
      this.user = user;
      if(user) {
        this.getUserTeam();
      }
    });
  }

  getUserTeam() {
    this.userService.getTeam(this.user.teamID).subscribe(team => {
      this.team = team;
    }, err => {
      console.log(err)
    })
  }

  login() {
      /*
    this.accountService.login(this.model).subscribe( res => {
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

}
