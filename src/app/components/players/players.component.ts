import { Component, OnInit } from '@angular/core';
import { CreateUser } from 'src/app/_models/create-user';
import { User } from '../../_models/User';
import { AccountService } from '../../_services/account.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})


export class PlayersComponent implements OnInit {
  //users: any;
  //model: any = {}
  users: Array<User> = new Array<User>();
  model: CreateUser;


  constructor(public userService: UserService, public accountService: AccountService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
          this.users = response;
          this.getTeams();
          //this.getRoles();
        }, err => {
          console.log(err);
        })
        
  }

  getTeams() {
    this.users.forEach(element => {
        element.unconfirmed = (element.roleName == "Unconfirmed User");
      this.userService.getTeam(element.teamID).subscribe( response => {
        element.team = response;
      }, err => {
        console.log(err);
      })
    })
  }

/*
  //We don't need this anymore
  getRoles() {
    this.users.forEach(element => {
      this.userService.getRole(element.id).subscribe( response => {
        element.role = response;
      }, err => {
        console.log(err);
      })
    })
  }
*/
  createUser() {
    this.accountService.registerUser(this.model).subscribe(response => {
      console.log(response);
      this.getUsers();
    }, err => {
      console.log(err)
    })
    this.getUsers();
  }

}
