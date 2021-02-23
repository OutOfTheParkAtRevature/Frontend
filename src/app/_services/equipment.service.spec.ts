import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EquipmentService } from './equipment.service';
import { Equipment } from '../_models/Equipment';
import { EquipmentRequest } from '../_models/EquipmentRequest';
import { Team } from '../_models/Team';
import { User } from '../_models/User';

describe('EquipmentService', () => {
  let service: EquipmentService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EquipmentService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#requests', () => {
    let dummyRequests: EquipmentRequest[];
    let dummyItems: Equipment[];

    beforeEach(() => {
      dummyRequests = [
        {
          id: 1,
          item: null, itemId: 1,
          message: '', requestDate: '', status: '',
          team: null, teamId: 1,
          user: null, userId: '8deee219-204b-4772-bfc5-c03a267ad1da'
        },
        {
          id: 2,
          item: null, itemId: 2,
          message: '', requestDate: '', status: '',
          team: null, teamId: 2,
          user: null, userId: '8deee219-204b-4772-bfc5-c03a267ad1da'
        }
      ] as EquipmentRequest[];
      dummyItems = [
        {
          id: 1,
          description: ''
        },
        {
          id: 2,
          description: ''
        }
      ] as Equipment[];
    });

    it('should call getRequests()', () => {
      service.getRequests().subscribe(requests =>
        expect(requests.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'equipmentRequests');
      expect(req.request.method).toBe('GET');
      req.flush(dummyRequests);
    });

    it('should call getRequest()', () => {
      service.getRequest(1).subscribe(request =>
        expect(request).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'equipment/1');
      expect(req.request.method).toBe('GET');
      req.flush(dummyRequests);
    });

    it('should call createRequest()', () => {
      service.createRequest(dummyRequests[0]).subscribe(request =>
        expect(request).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'equipmentRequests');
      expect(req.request.method).toBe('POST');
      req.flush(dummyRequests[0]);
    });

    it('should call editRequest()', () => {
      service.editRequest('8deee219-204b-4772-bfc5-c03a267ad1da', dummyRequests[1]).subscribe(request =>
        expect(request).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'equipment/8deee219-204b-4772-bfc5-c03a267ad1da');
      expect(req.request.method).toBe('PUT');
      req.flush(dummyRequests[1]);
    });

    it('should call getItems()', () => {
      service.getItems().subscribe(items =>
        expect(items.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'equipments');
      expect(req.request.method).toBe('GET');
      req.flush(dummyItems);
    });

    it('should call getItem()', () => {
      service.getItem(dummyItems[1].id).subscribe(item =>
        expect(item).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'equipments/2');
      expect(req.request.method).toBe('GET');
      req.flush(dummyItems[1]);
    });
  });

  describe('#other', () => {
    let dummyUser: User;
    let dummyTeam: Team;

    beforeEach(() => {
      dummyUser = {
        id: 1,
        userName: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        eVisible: true,
        password: '',
        pVisible: false,
        teamID: 1,
        roleName: '',
        team: null,
        role: null
      } as User;

      dummyTeam = {
        id: 1,
        name: '',
        losses: 0,
        wins: 0,
        winningPct: ''
      } as Team;
    });

    it('should call getUser()', () => {
      service.getUser('8deee219-204b-4772-bfc5-c03a267ad1da').subscribe(user =>
        expect(user).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'users/8deee219-204b-4772-bfc5-c03a267ad1da');
      expect(req.request.method).toBe('GET');
      req.flush(dummyUser);
    });

    it('should call getTeam()', () => {
      service.getTeam(dummyTeam.id).subscribe(team =>
        expect(team).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'teams/1');
      expect(req.request.method).toBe('GET');
      req.flush(dummyTeam);
    });
  });
});
