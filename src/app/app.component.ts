import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserLoggedIn } from './_models/UserLoggedIn';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sports Management';


  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: UserLoggedIn = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

}
