import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InboxMessageComponent } from './inbox-message.component';
import { MessageService } from 'src/app/_services/message.service';
import { User } from 'src/app/_models/User';
import { Role } from "src/app/_models/Role";
import { Team } from "src/app/_models/Team";

describe('InboxMessageComponent', () => {
  let component: InboxMessageComponent;
  let fixture: ComponentFixture<InboxMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessageService],
      declarations: [InboxMessageComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxMessageComponent);
    component = fixture.componentInstance;
    component.recipientList = {
      id: 1,
      userName: 'synaodev',
      fullName: 'synaodev',
      phoneNumber: '888-888-8888',
      email: 'synaodev@revature.net',
      eVisible: false,
      password: 'synaodev',
      pVisible: false,
      teamID: 1,
      roleName: 'Coach',
      team: {} as Team,
      role: {} as Role,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
