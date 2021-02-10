import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CalendarService } from './calendar.service';

describe('MessageService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getEvents()', () => {
    service.getEvents();
  });

  it('should call createEvent()', () => {
    let model: any = {};
    service.createEvent(model);
  });

  it('should be call deleteEvent(eventid)', () => {
    service.deleteEvent("event");
  });

});

