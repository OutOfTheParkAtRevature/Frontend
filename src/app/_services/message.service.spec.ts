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
          id: '6a15373f-6b2a-4711-bd6e-32f75750714d',
          body: '',
          date: new Date(),
          recipientListId: '27c63ab2-18cc-4161-ad9d-f36146f69efa',
          senderId: 'fa3c9e1d-d2ef-4d0f-801b-a7a3842ffae8',
          senderName: ''
        },
        {
          id: 'adc78472-82c3-40db-8357-770da25644bd',
          body: '',
          date: new Date(),
          recipientListId: 'ba7cf833-cf39-48c1-b9e5-867deedb7548',
          senderId: 'e4a47152-e370-4d81-a1b7-1bed486e800e',
          senderName: ''
        }
      ] as Message[];

      dummyUserInbox = {
        id: '8586dda6-fdc3-4603-8e37-29395a08d6d4',
        isRead: false,
        messageId: 'adc78472-82c3-40db-8357-770da25644bd',
        userId: 'fa3c9e1d-d2ef-4d0f-801b-a7a3842ffae8'
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
