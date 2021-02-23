import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';
import { Inbox } from '../_models/inbox';
import { Message } from '../_models/Message';
import { RecipientList } from '../_models/RecipientList';
import { UserInbox } from '../_models/UserInbox';

describe('MessageService', () => {
  let service: MessageService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MessageService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#messages', () => {
    let dummyMessages: Message[];
    let dummyUserInbox: UserInbox;

    beforeEach(() => {
      dummyMessages = [
        {
          id: 1,
          body: '',
          date: new Date(),
          recipientListId: 1,
          senderId: '',
          senderName: ''
        },
        {
          id: 2,
          body: '',
          date: new Date(),
          recipientListId: 2,
          senderId: '',
          senderName: ''
        }
      ] as Message[];

      dummyUserInbox = {
        id: 1,
        isRead: false,
        messageId: 1,
        userId: 1
      } as UserInbox;
    });

    it('should call getMessages()', () => {
      service.getMessages(2).subscribe(messages =>
        expect(messages).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'userInboxes/2');
      expect(req.request.method).toBe('GET');
      req.flush(dummyMessages);
    });

    it('should call sendMessage()', () => {
      service.sendMessage(dummyMessages[1]).subscribe(message =>
        expect(message).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'messages');
      expect(req.request.method).toBe('POST');
      req.flush(dummyMessages[1]);
    });

    it('should call getUserInboxes()', () => {
      service.getUserInboxes().subscribe(inboxes =>
        expect(inboxes).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'userinboxes');
      expect(req.request.method).toBe('GET');
      req.flush(dummyUserInbox);
    });
  });

  describe('#recipients', () => {
    let dummyRecipients: RecipientList[];
    beforeEach(() => {
      dummyRecipients = [
        {
          id: 1,
          recipientId: 1
        },
        {
          id: 2,
          recipientId: 2
        }
      ] as RecipientList[];
    });

    it('should call getRecipientLists()', () => {
      service.getRecipientLists().subscribe(lists =>
        expect(lists.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'recipientLists');
      expect(req.request.method).toBe('GET');
      req.flush(dummyRecipients);
    });

    it('should call getRecipientList()', () => {
      service.getRecipientList('8deee219-204b-4772-bfc5-c03a267ad1da').subscribe(list =>
        expect(list).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'recipientLists/8deee219-204b-4772-bfc5-c03a267ad1da');
      expect(req.request.method).toBe('GET');
      req.flush(dummyRecipients);
    });
  });
});
