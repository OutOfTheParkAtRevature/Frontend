import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditplayerComponent } from './editplayer.component';
import { UserService } from 'src/app/_services/user.service';
import { AccountService } from 'src/app/_services/account.service';
import { User } from '../../../_models/User';
import { Role } from '../../../_models/Role';
import { of } from 'rxjs';

describe('EditplayerComponent', () => {
  let component: EditplayerComponent;
  let fixture: ComponentFixture<EditplayerComponent>;
  let mockUserService;
  let mockUser;
  let mockRoles;
  let mockEdit;

  let user = {
    id: 1, userName: '', fullName: '',
    phoneNumber: '', email: '', eVisible: true,
    password: '', pVisible: false, teamID: 1,
    roleName: '', team: null, role: null
  } as User;

  let roles = [
    {
      id: 1,
      roleName: 'Ji'
    },
    {
      id: 2,
      roleName: 'Sho'
    }
  ] as Role[];

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('UserService', ['getUser', 'editUser', 'getRoles']);
    mockUser = mockUserService.getUser.and.returnValue(of(user));
    mockRoles = mockUserService.getRoles.and.returnValue(of(roles));
    mockEdit = mockUserService.editUser.and.returnValue(of(user));
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        AccountService,
        { provide: UserService, useValue: mockUserService }
      ],
      declarations: [EditplayerComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and have users/roles', () => {
    expect(component).toBeTruthy();
    expect(mockUser.calls.any()).toBeTrue();
    expect(mockRoles.calls.any()).toBeTrue();
  });

  it('should call editUser()', () => {
    component.editUser();
    expect(mockEdit.calls.any()).toBeTrue();
  });

  // getRole seems broken (- Tyler)

  // it('should call getRole()', () => {
  //   component.editedUser.roleName = 'Sho';
  //   component.getRole();
  //   expect(component.editedUser.role.)
  // });
});
