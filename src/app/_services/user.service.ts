import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditUser } from '../_models/edit-user';
import { Role } from '../_models/Role';
import { Team } from '../_models/Team';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //baseUrl = environment.apiUrl;
  baseUrl = "http://40.88.226.19/api/";
  //userUrl = "http://20.62.210.88/api/";
  userUrl = "http://localhost:3000/";
  teamUrl = "http://localhost:3000/";
  //teamUrl = "http://20.62.247.144/api/";
  //userUrl = this.baseUrl;
  //teamUrl = this.baseUrl;
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>
  {
    //return this.http.get<User[]>(this.userUrl + 'user');
    return this.http.get<User[]>(this.userUrl + 'users');
  }

  getUser(userId: string): Observable<User>
  {
    //return this.http.get<User>(this.userUrl + 'user/' + userId);
    return this.http.get<User>(this.userUrl + 'users/' + userId);
  }
  
  getUserByUsername(username: string): Observable<User>
  {
    return this.http.get<User>(this.userUrl + 'user/username' + username);
  }

  editUser(id: string, model: EditUser): Observable<User>
  {
    //return this.http.put<User>(this.userUrl + 'user/' + id, model);
    return this.http.put<User>(this.userUrl + 'users/' + id, model);
  }

  deleteUser(id: string): Observable<any>
  {
    return this.http.delete<any>(this.userUrl + 'user/' +id);
  }

  getUserRole(userId: any): Observable<string>{
    return this.http.get<string>(this.userUrl + 'user/role/' + userId);
  }

  approveRole(userId: any, model: EditUser): Observable<User>{
    return this.http.put<User>(this.userUrl + 'user/role/' + userId, model);
  }

  getRoles(): Observable<Role[]>
  {
    //return this.http.get<Role[]>(this.userUrl + 'user/roles');
    return this.http.get<Role[]>(this.userUrl + 'roles');
  }

  getRole(roleId: string): Observable<Role>
  {
    //return this.http.get<Role>(this.userUrl + 'user/roles/' + roleId);
    return this.http.get<Role>(this.userUrl + 'roles/' + roleId);
  }

  getTeams(): Observable<Team[]>
  {
    //return this.http.get<Team[]>(this.teamUrl + 'team');
    return this.http.get<Team[]>(this.teamUrl + 'teams');
  }

  getTeam(teamId: string): Observable<Team>
  {
    //return this.http.get<Team>(this.teamUrl + 'team/' + teamId);
    return this.http.get<Team>(this.teamUrl + 'teams/' + teamId);
  }

  

  


}
