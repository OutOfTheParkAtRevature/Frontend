import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ MessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRecipients()', () => {
    component.messagesArr = [{}];
    component.messagesArr[0].recipientListId = 3;
    component.getRecipients();
  });

  it('should call getMessageBox()', () => {
    component.messagesArr = [{}];
    component.messagesArr[0].recipient = [];
    component.messagesArr[0].recipient[0] = "4";
    component.messagesArr[0].senderID = 5
    component.userLoggedIn = {};
    component.userLoggedIn.userID = 5;
    component.selectedUserId = "4";
    component.getMessageBox(5);
  });

  it('should call sendMessage()', () => {
    component.message = {
      senderID: null, recipientList: null 
    };
    component.userLoggedIn = {
      userID: 3, 
    }
    component.sendMessage();
  });

});
