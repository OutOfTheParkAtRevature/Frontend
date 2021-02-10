import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Role } from '../_models/Role';
import { Team } from '../_models/Team';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //baseUrl = environment.apiUrl;
  baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>
  {
    //return this.http.get(this.baseUrl + 'users');
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(userId: string): Observable<User>
  {
    //return this.http.get(this.baseUrl + `users/${userId}`);
    return this.http.get<User>(this.baseUrl + 'users/' + userId);
  }
  
  editUser(id: string, model: User): Observable<User>
  {
    //return this.http.put(this.baseUrl + `users/edit/${id}`, model );
    return this.http.put<User>(this.baseUrl + 'users/' + id, model);
  }

  getTeams(): Observable<Team[]>
  {
    //return this.http.get(this.baseUrl + 'teams');
    return this.http.get<Team[]>(this.baseUrl + 'teams');
  }

  getTeam(teamId: number): Observable<Team>
  {
    //return this.http.get(this.baseUrl + `teams/${teamId}`);
    return this.http.get<Team>(this.baseUrl + 'teams/' + teamId);
  }

  getRoles(): Observable<Role[]>
  {
    //return this.http.get(this.baseUrl + 'users/roles');
    return this.http.get<Role[]>(this.baseUrl + 'roles');
  }

  getRole(roleId: number): Observable<Role>
  {
    //return this.http.get(this.baseUrl + `users/roles/${roleId}`);
    return this.http.get<Role>(this.baseUrl + 'roles/' + roleId);
  }

}
