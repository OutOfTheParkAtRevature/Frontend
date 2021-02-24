import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InboxMessageComponent } from './inbox-message.component';
import { MessageService } from 'src/app/_services/message.service';
import { User } from 'src/app/_models/User';
import { Role } from "src/app/_models/Role";
import { Team } from "src/app/_models/Team";
import { Inbox } from 'src/app/_models/inbox';
import { Recipient } from 'src/app/_models/recipient';

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
    component.Inbox = {
      isRead: false,
      recipients: [],
      userID: 'ab62eec6-0fba-4e14-9a25-039af61be5e2'
    } as Inbox;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
