import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EquipmentComponent } from './equipment.component';
import { AccountService } from 'src/app/_services/account.service';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { UserService } from 'src/app/_services/user.service';
import { Equipment } from '../../_models/Equipment';
import { EquipmentRequest } from '../../_models/EquipmentRequest';
import { User } from '../../_models/User';
import { Team } from '../../_models/Team';
import { of } from 'rxjs';

describe('EquipmentComponent', () => {
  let component: EquipmentComponent;
  let fixture: ComponentFixture<EquipmentComponent>;

  let requests = [
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

  let items = [
    {
      id: 1,
      description: ''
    },
    {
      id: 2,
      description: ''
    }
  ] as Equipment[];

  let mockEquipmentService = jasmine.createSpyObj('EquipmentService', ['getRequests', 'getTeam', 'getUser', 'getItem']);
  let mockRequests = mockEquipmentService.getRequests.and.returnValue(of(requests));
  let mockEquipment = mockEquipmentService.getItem.and.returnValue(of(items));
  let mockUser = mockEquipmentService.getUser.and.returnValue(of(
    {
      id: 1, userName: '', fullName: '',
      phoneNumber: '', email: '', eVisible: true,
      password: '', pVisible: false, teamID: 1,
      roleName: '', team: null, role: null
    } as User
  ));
  let mockTeam = mockEquipmentService.getTeam.and.returnValue(of(
    {
      id: 1,
      name: '',
      losses: 0,
      wins: 0,
      winningPct: ''
    } as Team
  ));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: EquipmentService, useValue: mockEquipmentService },
        AccountService,
        UserService
      ],
      declarations: [EquipmentComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(mockRequests.calls.any()).toBeTrue();
    expect(mockEquipment.calls.any()).toBeTrue();
    expect(mockUser.calls.any()).toBeTrue();
    expect(mockTeam.calls.any()).toBeTrue();
  });
});
