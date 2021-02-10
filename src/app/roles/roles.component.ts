import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { Role } from '../_models/Role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Array<Role> = new Array<Role>();
  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() 
  {
      /* 
    this.http.get('https://localhost:44342/api/users/roles').subscribe(response => {
      this.roles = response;
    }, err => {
      console.log(err)
    })
    */
   this.userService.getRoles().subscribe
   (
        (data) => this.roles = data,
        (error) => console.log(error)
   );
  }
}
