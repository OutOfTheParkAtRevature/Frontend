import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountService } from './account.service';
import { User } from '../_models/User';
import { UserLoggedIn } from '../_models/UserLoggedIn';
import { UserLoggingIn } from '../_models/UserLoggingIn';

describe('AccountService', () => {
  let service: AccountService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AccountService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#roles', () => {
    let dummyRoleNames: { roleName: string }[];

    beforeEach(() => {
      dummyRoleNames = [
        { roleName: 'Player' },
        { roleName: 'Parent' },
        { roleName: 'AssistantCoach' },
        { roleName: 'Head Coach' },
        { roleName: 'League Manager' },
        { roleName: 'Admin' }
      ];
    });

    it('should call isPlayerAuthorized()', () => {
      dummyRoleNames.forEach(rn => {
        expect(service.isPlayerAuthorized(rn)).toBeTrue();
      });
    });

    it('should call is isParentAuthorized()', () => {
      dummyRoleNames.forEach(rn => {
        let v: boolean = rn.roleName != 'Player';
        expect(service.isParentAuthorized(rn)).toBe(v);
      });
    });

    it('should call is isAssCoachAuthorized()', () => {
      dummyRoleNames.forEach(rn => {
        let v: boolean =
          rn.roleName != 'Player' &&
          rn.roleName != 'Parent';
        expect(service.isAssCoachAuthorized(rn)).toBe(v);
      });
    });

    it('should call is isCoachAuthorized()', () => {
      dummyRoleNames.forEach(rn => {
        let v: boolean =
          rn.roleName != 'Player' &&
          rn.roleName != 'Parent' &&
          rn.roleName != 'AssistantCoach';
        expect(service.isCoachAuthorized(rn)).toBe(v);
      });
    });

    it('should call is isLeagueAdminAuthorized()', () => {
      dummyRoleNames.forEach(rn => {
        let v: boolean =
          rn.roleName == 'League Manager' ||
          rn.roleName == 'Admin';
        expect(service.isLeagueAdminAuthorized(rn)).toBe(v);
      });
    });

    it('should call is isAppAdminAuthorized()', () => {
      dummyRoleNames.forEach(rn => {
        let v: boolean = rn.roleName == 'Admin';
        expect(service.isAppAdminAuthorized(rn)).toBe(v);
      });
    });
  });

  describe('#users', () => {
    let dummyUsers: User[];

    beforeEach(() => {
      dummyUsers = [
        {
          id: 1, userName: 'synaodev', fullName: '',
          phoneNumber: '', email: '', eVisible: true,
          password: 'synaodev', pVisible: false, teamID: 1,
          roleName: '', team: null, role: null
        },
        {
          id: 2, userName: 'johnny', fullName: '',
          phoneNumber: '', email: '', eVisible: true,
          password: 'johnny', pVisible: false, teamID: 2,
          roleName: '', team: null, role: null
        }
      ] as User[];
    });

    it('should call registerUser()', () => {
      service.registerUser({}).subscribe(user =>
        expect(user).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'users');
      expect(req.request.method).toBe('POST');
      req.flush(dummyUsers[0]);
    });

    it('should call login() and logout()', () => {
      let loginData: UserLoggingIn = {
        username: 'synaodev',
        password: 'synaodev'
      };
      service.login(loginData).subscribe(res =>
        expect(res).toBeFalsy(), // Is it supposed this way? (- Tyler)
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'account/login');
      expect(req.request.method).toBe('POST');
      req.flush(dummyUsers[0]);

      service.currentUser$.subscribe(user =>
        expect(user.userName).toBe(dummyUsers[0].userName)
      );
    });

    it('should call logout()', () => {
      service.logout();
      service.currentUser$.subscribe(user =>
        expect(user).toBeFalsy()
      );
    });
  });
});
