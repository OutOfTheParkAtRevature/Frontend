import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserLoggingIn } from '../_models/UserLoggingIn';
import { UserLoggedIn } from '../_models/UserLoggedIn';

describe('AccountService', () => {
  let service: AccountService;
  let userLoggingIn: UserLoggingIn;
  let userLoggedIn: UserLoggedIn;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call login()', () => {
    userLoggingIn = {
      username: "travis", password: "travis123"
    };
    service.login(userLoggingIn);

  });

  it('should call setCurrentUser()', () => {
    userLoggedIn = {
      userID: "hi", userName: "travis", fullName: "Travis Martin", 
      phoneNumber: "111-111-1111", email: "travis@gmail.com", 
      roleID: null, teamID: null
    };
    service.setCurrentUser(userLoggedIn);
  });

  it('should call logout()', () => {
    service.logout();
  });

});
