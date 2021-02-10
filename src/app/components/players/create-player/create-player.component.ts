import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../_services/account.service';
import { UserService } from '../../../_services/user.service';
import { Role } from '../../../_models/Role';
import { Team } from '../../../_models/Team';
import { User } from '../../../_models/User';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  //model:any = {};
  //teamList:any;
  //roleList: any;
  model: User;
  teamList: Array<Team> = new Array<Team>();
  roleList: Array<Role> = new Array<Role>();

  constructor(public accountService: AccountService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getTeamList();
    this.getRoleList();
  }

  createUser() {
    this.accountService.currentUser$.subscribe(user => {
      this.model.teamID = user.roleID;
    })

    this.getRole();
    console.log(this.model);
    this.accountService.registerUser(this.model).subscribe(res => {
      console.log(res)
      this.router.navigate(['/players'])
    }, err => {
      console.log(err);
    });
  }

  getTeamList() {
    this.userService.getTeams().subscribe( teams => {
      this.teamList = teams;
    }, err => {
      console.log(err);
    })
  }

  getTeam() {
    for (let i = 0; i < this.teamList.length; i++) {
      if (this.teamList[i].name == this.model.team.name) {
        this.model.teamID = this.teamList[i].id;
      }
    }
  }

  getRoleList() {
    this.userService.getRoles().subscribe( roles => {
      this.roleList = roles;
    }, err => {
      console.log(err);
    })
  }

  getRole() {
    for (let i = 0; i < this.roleList.length; i++) {
      if (this.roleList[i].roleName == this.model.role.roleName) {
        this.model.roleID = this.roleList[i].id;
      }
    }
  }

}
