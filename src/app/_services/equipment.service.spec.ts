import { TestBed } from '@angular/core/testing';

import { EquipmentService } from './equipment.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../_models/User';

describe('EquipmentService', () => {
  let service: EquipmentService;
  let model: any = {
    equipmentId: "6", item: "bat"
  }
  let user: User = {
    userID: "hello", userName: "john", fullName: "John Jingleheimer",
    phoneNumber: "111-111-1111", email: "john@gmail.com", teamID: 3, roleID: 6
  };
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getRequests', () => {
    service.getRequests();
  });

  it('should call editRequests(id, model)', () => {
    service.editRequest(model.equipmentId, model);
  });

  it('should call getTeam(teamId)', () => {
    service.getTeam(user.teamID);
  });

  it('should call getUser(userId)', () => {
    service.getUser(user.userID);
  });

  it('should call createRequest(model)', () => {
    service.createRequest(model);
  });

  it('should call getItems', () => {
    service.getItems();
  });

  it('should call getItem(id)', () => {
    service.getItem(model.equipmentId);
  });
});
