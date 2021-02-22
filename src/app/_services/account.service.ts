import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CreateUser } from '../_models/create-user';
import { User } from '../_models/User';
import { UserLoggedIn } from '../_models/UserLoggedIn';
import { UserLoggingIn } from '../_models/UserLoggingIn';

@Injectable({
  providedIn: 'root'
}) 
export class AccountService {

  //baseUrl = environment.apiUrl;
  baseUrl: string = "http://localhost:3000/api/";
  private currentUserSource = new ReplaySubject<UserLoggedIn>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  //TODO
  login(model:UserLoggingIn) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((res:UserLoggedIn) => {
        const user = res;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user:UserLoggedIn) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  registerUser(model: CreateUser) : Observable<User>
  {
    return this.http.post<User>(this.baseUrl + 'account/create', model);
    //return this.http.post<User>(this.baseUrl + "users", model);
  }


  //Role Authorization Methods
  isPlayerAuthorized(user: any): boolean
  {
    //return user.roleID >= 1;
    return user.roleName == "Player" || user.roleName == "Parent" || user.roleName == "AssistantCoach" || user.roleName == "Head Coach"
            || user.roleName == "League Manager" || user.roleName == "Admin";
  }

  isParentAuthorized(user: any): boolean
  {
    //return user.roleID >= 2;
    return user.roleName == "Parent" || user.roleName == "AssistantCoach" || user.roleName == "Head Coach"
            || user.roleName == "League Manager" || user.roleName == "Admin";
  }

  isAssCoachAuthorized(user: any): boolean
  {
    //return user.roleID >= 3;
    return user.roleName == "AssistantCoach" || user.roleName == "Head Coach" || user.roleName == "League Manager" || user.roleName == "Admin";
  }

  isCoachAuthorized(user: any): boolean
  {
    //return user.roleID >= 4;
    return user.roleName == "Head Coach" || user.roleName == "League Manager" || user.roleName == "Admin";
  }

  isLeagueAdminAuthorized(user: any): boolean
  {
    //return user.roleID >= 5;
    return user.roleName == "League Manager" || user.roleName == "Admin";
  }

  isAppAdminAuthorized(user: any): boolean
  {
    //return user.roleID >= 6;
    return user.roleName == "Admin";
  }
}
