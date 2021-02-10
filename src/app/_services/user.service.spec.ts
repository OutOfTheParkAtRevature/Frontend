import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../_models/User';


describe('UserServiceService', () => {
  let service: UserService;
  let user: User = {
    userID: "hello", userName: "john", fullName: "John Jingleheimer",
    phoneNumber: "111-111-1111", email: "john@gmail.com", teamID: 3, roleID: 6
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should call getUsers()', () => {
    service.getUsers();
  });

  it('should call getTeam(teamId)', () => {
    //spyOn(service, "getTeam");
    service.getTeam(user.teamID);
    //expect(service.getTeam).toHaveBeenCalled();
  });

  it('should call editUser(id, model)', () => {
    service.editUser(user.userID, user);
  });

  it('should call getRole(roleId)', () => {
    service.getRole(user.roleID);
  });

});
