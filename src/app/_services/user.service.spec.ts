import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../_models/User';
import { Role } from '../_models/Role';
import { Team } from '../_models/Team';

describe('UserServiceService', () => {
  let service: UserService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('#users', () => {
    let dummyUsers: User[];
    beforeEach(() => {
      dummyUsers = [
        {
          id: 1, userName: '', fullName: '',
          phoneNumber: '', email: '', eVisible: true,
          password: '', pVisible: false, teamID: 1,
          roleName: '', team: null, role: null, unconfirmed: false
        },
        {
          id: 2, userName: '', fullName: '',
          phoneNumber: '', email: '', eVisible: true,
          password: '', pVisible: false, teamID: 2,
          roleName: '', team: null, role: null, unconfirmed: false
        }
      ] as User[];
    });

    it('should call getUsers()', () => {
      service.getUsers().subscribe(users =>
        expect(users.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'users');
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);
    });

    it('should call getUser()', () => {
      service.getUser('8deee219-204b-4772-bfc5-c03a267ad1da').subscribe(user =>
        expect(user).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'users/8deee219-204b-4772-bfc5-c03a267ad1da');
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);
    });

    it('should call editUser()', () => {
      service.editUser('8deee219-204b-4772-bfc5-c03a267ad1da', dummyUsers[1]).subscribe(user =>
        expect(user).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'users/8deee219-204b-4772-bfc5-c03a267ad1da');
      expect(req.request.method).toBe('PUT');
      req.flush(dummyUsers[1]);
    });
  });

  describe('#teams', () => {
    let dummyTeams: Team[];

    beforeEach(() => {
      dummyTeams = [
        {
          id: 1,
          name: '',
          losses: 0,
          wins: 0,
          winningPct: ''
        },
        {
          id: 2,
          name: '',
          losses: 0,
          wins: 0,
          winningPct: ''
        }
      ] as Team[];
    });

    it('should call getTeams()', () => {
      service.getTeams().subscribe(teams =>
        expect(teams.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'teams');
      expect(req.request.method).toBe('GET');
      req.flush(dummyTeams);
    });

    it('should call getTeam()', () => {
      service.getTeam(2).subscribe(team =>
        expect(team).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'teams/2');
      expect(req.request.method).toBe('GET');
      req.flush(dummyTeams[1]);
    });
  });

  describe('#roles', () => {
    let dummyRoles: Role[];

    beforeEach(() => {
      dummyRoles = [
        {
          id: 1,
          roleName: ''
        },
        {
          id: 2,
          roleName: ''
        }
      ] as Role[];
    });

    it('should call getRoles()', () => {
      service.getRoles().subscribe(roles =>
        expect(roles.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'roles');
      expect(req.request.method).toBe('GET');
      req.flush(dummyRoles);
    });

    it('should call getRole()', () => {
      service.getRole(2).subscribe(role =>
        expect(role).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'roles/2');
      expect(req.request.method).toBe('GET');
      req.flush(dummyRoles[1]);
    });
  });
});
