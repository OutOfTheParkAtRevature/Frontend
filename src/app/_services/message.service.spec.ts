import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getRecpientLists()', () => {
    service.getRecipientLists();
  });

  it('should be getRecipientList(id)', () => {
    service.getRecipientList("id");
  });

  it('should call sendMessage()', () => {
    let message: any;
    service.sendMessage(message);
  });
});
