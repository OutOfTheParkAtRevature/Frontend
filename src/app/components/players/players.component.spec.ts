import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlayersComponent } from './players.component';
import { AccountService } from '../../_services/account.service';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/User';
import { Team } from '../../_models/Team';
import { of } from 'rxjs';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let mockUserService;
  let mockAccountService;

  let mockUsers;
  let mockTeam;

  let users = [
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

  let team = {
    id: 1,
    name: '',
    losses: 0,
    wins: 0,
    winningPct: ''
  } as Team;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('UserService', ['getUsers', 'getTeam']);
    mockUsers = mockUserService.getUsers.and.returnValue(of(users));
    mockTeam = mockUserService.getTeam.and.returnValue(of(team));
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AccountService,
        { provide: UserService, useValue: mockUserService }
      ],
      declarations: [PlayersComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(mockUsers.calls.any()).toBeTrue();
    expect(mockTeam.calls.any()).toBeTrue();
  });

  it('should call createUser()', () => {
    let len = component.users.length;
    component.model = {
      id: 3, userName: '', fullName: '',
      phoneNumber: '', email: '', eVisible: true,
      password: '', pVisible: false, teamID: 1,
      roleName: '', team: null, role: null,
      unconfirmed: false
    };
    component.createUser();
    expect(component.users.length).toBe(len);
  });
});
