import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerdetailsComponent } from './playerdetails.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { UserLoggedIn } from 'src/app/_models/UserLoggedIn';

describe('PlayerdetailsComponent', () => {
  let component: PlayerdetailsComponent;
  let fixture: ComponentFixture<PlayerdetailsComponent>;
  let user: UserLoggedIn = {
    userID: "1", userName: "travis", fullName: "Travis Martin", 
    phoneNumber: "111-111-1111", email: "travis@gmail.com",
    teamID: 5, roleID: 2
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([{path: 'players/create', component: DummyComponent}])],
      declarations: [ PlayerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to player details', () => {
    const location = TestBed.inject(Location)
    expect(location.isCurrentPathEqualTo(''));
  });

  it('should call getTeam()', () => {
    component.user = user;
    component.getTeam();
  });

  it('should call getRole()', () => {
    component.user = user;
    component.getRole();
  });

});

@Component({template: ''})
class DummyComponent {

}