import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router"

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  // public userRegister: UserRegister = new UserRegister();
  // public userLogin: UserLogIn = new UserLogIn();
  constructor( private router: Router) { }

  ngOnInit(): void {

  }

  boolLogIn = true;
  boolRegister = false;

  

  onChangingSection()
  {
    this.boolLogIn = !this.boolLogIn;
    this.boolRegister = !this.boolRegister;
  
  }

  RegisteringUser(event){

    event.preventDefault();
  }

  LogIngUser(event)
  {
    event.preventDefault();

    
  }

  

}
