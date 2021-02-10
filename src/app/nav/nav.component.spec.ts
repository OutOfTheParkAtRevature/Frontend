import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './nav.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { By } from '@angular/platform-browser';
import {Location} from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { HttpClient } from '@angular/common/http';
import { UserLoggedIn } from '../_models/UserLoggedIn';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let mockLogin;
  let accountServiceMock;
  let user: UserLoggedIn = {
    userID: "1", userName: "travis", fullName: "Travis Martin", 
    phoneNumber: "111-111-1111", email: "travis@gmail.com",
    teamID: null, roleID: null
  };

  beforeEach(async () => {
    accountServiceMock = jasmine.createSpyObj('AccountService', ['login', 'logout']);
    mockLogin = accountServiceMock.login.and.returnValue(of(user));
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule
        .withRoutes([{path: '', component: DummyComponent}, {path: 'plays', component: DummyComponent}])],
      declarations: [ NavComponent ],
      providers: [{ provide: AccountService, useValue: accountServiceMock }, HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show unordered list', () => {
    const unorderedList = fixture.debugElement.queryAll(By.css('ul'));
    expect(unorderedList.length).toBe(1);
  });

  it('should show unordered list items', () => {
    const listItems = fixture.debugElement.queryAll(By.css('li'));
    expect(listItems.length).toBe(8);
  });

  it('should navigate to home page', () => {
    const location = TestBed.inject(Location)
    expect(location.path()).toBe('');
  });

  it('should submit username and password to login', () => {
    const listOfInputs = fixture.debugElement.queryAll(By.css('input'));
    const userName: HTMLInputElement = listOfInputs[0].nativeElement;
    const password: HTMLInputElement = listOfInputs[1].nativeElement;
    fixture.detectChanges();

    userName.value = "travis";
    password.value = "travis123";

    userName.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));
    expect(userName.value).toBe('travis');
    expect(password.value).toBe('travis123');

    component.model.username = 'travis';
    component.model.password = 'travis123';
    expect(component.model.username).toBe('travis');
    expect(component.model.password).toBe('travis123');
    //let spyEvent = spyOn(component, 'login');
    component.login();
    // expect(mockNav.calls.any()).toBe(true)
    // expect(spyEvent.calls.any()).toBe(true)
    // expect(component.model2.userName).toBe('travis');

    // const allButtons = fixture.debugElement.queryAll(By.css('button'));
    // const submit: HTMLLinkElement = allButtons[1].nativeElement;
    // submit.click();
    // fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   expect(component.login()).toHaveBeenCalled();
    // }); 
  });

  it('should call logout', () => {
    //let spyEvent = spyOn(component, "login");
    component.model.username = 'travis';
    component.model.password = 'travis123';
    component.login();
    //expect(spyEvent.calls.any()).toBe(true)

    //let spyEvent2 = spyOn(component, "logout");
    component.logout();
    //expect(spyEvent2.calls.any()).toBe(true)
    expect(component.model2.userName).toBe(null);
    // const listOfLinks = fixture.debugElement.queryAll(By.css('a'));
    // const logout: HTMLInputElement = listOfLinks[7].nativeElement;
    // logout.click();
    // fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   expect(component.logout()).toHaveBeenCalled();
    // });
  });

});


@Component({template: ''})
class DummyComponent {

}