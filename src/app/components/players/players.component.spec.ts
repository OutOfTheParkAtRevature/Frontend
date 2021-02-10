<<<<<<< HEAD
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PlayersComponent } from './players.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../_services/user.service';
import { of } from 'rxjs';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let userServiceMock: any;
  let accountServiceMock: any;
  let user: User = {
    userID: "hi", userName: "elvis", fullName: "Elvis Presley", 
    phoneNumber: "111-111-1111", email: "elvis@gmail.com",
    teamID: null, roleID: null
  };
  // let submitEl: DebugElement;
  // let userNameEl: DebugElement;
  // let passwordEl: DebugElement;
  // let fullNameEl: DebugElement;
  // let phoneNumberEl: DebugElement;
  // let emailEl: DebugElement;
  // let teamIdEl: DebugElement;
  // let roleIdEl: DebugElement;

  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj('UserService', ['getUsers']);
    userServiceMock.getUsers.and.returnValue(of(user));
    accountServiceMock = jasmine.createSpyObj('AccountService', ['registerUser']);
    accountServiceMock.registerUser.and.returnValue(of(user));
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [ PlayersComponent ],
      providers: [
        {provide: UserService, UseValue: userServiceMock}, {provide: AccountService, UseValue: accountServiceMock}, HttpClientTestingModule
      ]
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersComponent ]
>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
<<<<<<< HEAD
    // submitEl = fixture.debugElement.query(By.css('button'));
    // userNameEl = fixture.debugElement.query(By.css('input[name=Username]'));
    // passwordEl = fixture.debugElement.query(By.css('input[name=Password]'));
    // fullNameEl = fixture.debugElement.query(By.css('input[name=FullName]'));
    // phoneNumberEl = fixture.debugElement.query(By.css('input[name=PhoneNumber]'));
    // emailEl = fixture.debugElement.query(By.css('input[name=Email]'));
    // teamIdEl = fixture.debugElement.query(By.css('input[name=TeamId]'));
    // roleIdEl = fixture.debugElement.query(By.css('input[name=RoleId]'));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should register a user', () => {
    component.model.username = 'travis';
    component.model.password = 'travis123';
    expect(component.model.username).toBe('travis');
    expect(component.model.password).toBe('travis123');
    component.createUser();
    //expect(component.model.userName).toBe("elvis");
  });

  it('should call getTeams()', () => {
    component.users = [{}]
    component.users[0].teamId = 4;
    component.getTeams();
  });

  it('should call getRoles()', () => {
    component.users = [{}]
    component.users[0].roleId = 4;
    component.getRoles();
  });

  
  // it('should have an h2 tag', () => {
  //   const fixture = TestBed.createComponent(PlayersComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('div').).toContain('Players Details');
  // });

  // it('should render input elements', () => {
  //   let user: PlayersComponent["model"];
  //   userNameEl.nativeElement.value = "jerryrice";
  //   passwordEl.nativeElement.value = "jerry123";
  //   fullNameEl.nativeElement.value = "Jerry Rice";
  //   phoneNumberEl.nativeElement.value = "111-111-1111";
  //   emailEl.nativeElement.value = "jerryrice@gmail.com";
  //   teamIdEl.nativeElement.value = "1";
  //   roleIdEl.nativeElement.value = "1";

  //   component.createUser();

  //   submitEl.triggerEventHandler('click', null);

  //   expect(user.Email).toBe("jerryrice@gmail.com");

  //   expect(userNameEl).toBeTruthy();
  //   expect(passwordEl).toBeTruthy();
  //   expect(fullNameEl).toBeTruthy();
  //   expect(phoneNumberEl).toBeTruthy();
  //   expect(emailEl).toBeTruthy();
  //   expect(teamIdEl).toBeTruthy();
  //   expect(roleIdEl).toBeTruthy();
  // });
});
=======
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 53b66201a7d54551c99df3dd3547abb4cc2d25cf
