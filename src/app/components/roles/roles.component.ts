import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/_services/user.service';
import { Role } from 'src/app/_models/Role';
=======
>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf
}
