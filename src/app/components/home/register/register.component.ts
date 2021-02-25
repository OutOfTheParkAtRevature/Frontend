import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../_services/account.service';
import { UserService } from '../../../_services/user.service';
import { Role } from '../../../_models/Role';
import { Team } from '../../../_models/Team';
import { User } from '../../../_models/User';
import { CreateUser } from 'src/app/_models/create-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: CreateUser;
  teamList: Array<Team> = new Array<Team>();

  constructor(public accountService: AccountService, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getTeamList();
    //this.model.team = new Team();
    this.model = new CreateUser();
  }

  createUser() {
    this.getTeam();
    this.getRole();
    console.log(this.model);

    this.accountService.registerUser(this.model).subscribe(res => {
      console.log(res);
      this.router.navigate(['/leagueNews']);
      //Login this player
    }, err => {
      console.log(err);
      console.log(err["error"]);
      this.router.navigate(['/leagueNews']);
    });
  }

  getTeamList() {
    this.userService.getTeams().subscribe( teams => {
      this.teamList = teams;
      console.log(this.teamList);
    }, err => {
      console.log(err);
      console.log(err["error"]);
    })
  }

  getTeam() {
      console.log(this.model.team);
      let temp: any = this.model.team;
    for (let i = 0; i < this.teamList.length; i++) {
      if (this.teamList[i].name == temp) {
        this.model.teamID = this.teamList[i].teamID;
      }
    }
    this.model.team = null;
  }

  getRole() {
      
    //this.model.roleName = this.model.role.roleName;
    this.model.roleName = "Unconfirmed User";

    /*
      //Do we need this?
    for (let i = 0; i < this.roleList.length; i++) {
      if (this.roleList[i].roleName == this.model.role.roleName) {
        //this.model.roleID = this.roleList[i].id;
      }
    }
    */
  }

}
