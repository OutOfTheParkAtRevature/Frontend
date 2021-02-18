import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AccountService } from '../../../_services/account.service';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../_models/User';


@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, public userService: UserService, public accountService: AccountService) { }

  user: User;
  userId: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });
    this.getUser(this.userId);
  }

  getUser(userId) {
    this.userService.getUser(userId).subscribe(response => {
      this.user = response;
      console.log(this.user.fullName);
      this.getTeam();
      //this.getRole();
    }, err => {
      console.log(err);
    })
  }

  getTeam() {
      this.userService.getTeam(this.user.teamID).subscribe(response => {
        this.user.team = response;
      }, err => {
        console.log(err);
      })
  }
  
/*
  //Shouldn't Need this anymore
  getRole() {
    this.userService.getRole(this.user.roleID).subscribe(res => {
      this.user.role = res;
    }, err => {
      console.log(err);
    })
  }
*/


  
}
