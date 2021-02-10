import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/User';


@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, public accountService: AccountService) { }

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
      this.getTeam();
      this.getRole();
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

  getRole() {
    this.userService.getRole(this.user.roleID).subscribe(res => {
      this.user.role = res;
    }, err => {
      console.log(err);
    })
  }



  
}
