import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../_models/User';
import { UserLoggedIn } from '../_models/UserLoggedIn';
import { UserLoggingIn } from '../_models/UserLoggingIn';

@Injectable({
  providedIn: 'root'
}) 
export class AccountService {

  //baseUrl = environment.apiUrl;
  baseUrl: string = "http://localhost:3000/";
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

  registerUser(model: any) : Observable<User>
  {
    //return this.http.post(this.baseUrl + 'account/register', model)
    return this.http.post<User>(this.baseUrl + "users", model);
  }

}
