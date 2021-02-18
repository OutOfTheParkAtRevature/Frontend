import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../_services/account.service';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../_models/User';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public userService: UserService,
              private titleService: Title,
              public accountService: AccountService,
              private redirect: Router) { }

  userId: string;
  //user: any = {};
  editedUser: any = {};
  user: User;
  //editedUser: User;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });

    this.getUser(this.userId);
  }

  getUser(userId) {
    this.userService.getUser(userId).subscribe(response => {
      this.user = response;
      this.titleService.setTitle(`Edit - ${this.user.userName}`);

      this.editedUser = {
        fullName: this.user.fullName,
        password: this.user.password,
        phoneNumber: this.user.phoneNumber,
        email: this.user.email
      };
    }, err => {
      console.log(err);
    })
  }

  editUser() {
    console.log(this.editedUser);

    //Send in all the other data
    this.editedUser.id = this.user.id;
    this.editedUser.userName = this.user.userName;
    this.editedUser.teamID = this.user.teamID;
    this.editedUser.roleName = this.user.roleName;

    this.userService.editUser(this.userId, this.editedUser).subscribe(res => {
      console.log(res);
      this.redirect.navigate([`/players/details/${this.user.id}`])
    }, err => {
      console.log(err);
    })
  }


}
