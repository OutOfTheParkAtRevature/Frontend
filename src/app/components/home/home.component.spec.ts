import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { UserLoggedIn } from '../_models/UserLoggedIn';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockLogin;
  let accountServiceMock;
  let setUserMock;
  let user: UserLoggedIn = {
    userID: "1", userName: "travis", fullName: "Travis Martin", 
    phoneNumber: "111-111-1111", email: "travis@gmail.com",
    teamID: 5, roleID: 2
  };

  beforeEach(async () => {
    accountServiceMock = jasmine.createSpyObj('AccountService', ['login', 'setCurrentUser']);
    mockLogin = accountServiceMock.login.and.returnValue(of(user));
    setUserMock = accountServiceMock.setCurrentUser.and.returnValue(of(user));
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ HomeComponent ],
      providers: [{ provide: AccountService, useValue: accountServiceMock }, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login()', () => {
    component.model.username = 'travis';
    component.model.password = 'travis123';
    expect(component.model.username).toBe('travis');
    expect(component.model.password).toBe('travis123');
    component.login();
  });

  it('should get the current user', () => {
     component.user = {
      userID: "1", userName: "travis", fullName: "Travis Martin", 
      phoneNumber: "111-111-1111", email: "travis@gmail.com",
      teamID: null, roleID: null
    };
    expect(component.user.userName).toEqual('travis');
    // accountServiceMock.currentUser$ = component.user;
    // component.getLoggedInUser();
  });

  it('should call getUserTeam()', () => {
    component.user = user;
    component.getUserTeam();
  });

});
