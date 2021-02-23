import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CalendarService } from './calendar.service';

describe('MessageService', () => {
  let service: CalendarService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CalendarService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#all', () => {
    let dummyCalender: any;
    let dummyEvents: any[];

    beforeEach(() => {
      dummyCalender = { id: '79e3a00b-7a87-4704-b113-e864761263c7' };
      dummyEvents = [
        { id: '148c94dc-faeb-4102-add5-48fb720267c8' },
        { id: 'c13a8ab4-d058-4e3c-b0fc-952d72650a35' },
        { id: 'dfd16c10-009c-4f72-9f8a-d33ff61ab6c2' }
      ];
    });

    it('should call getCalendar()', () => {
      service.getCalendar().subscribe(calendar =>
        expect(calendar).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'calendar');
      expect(req.request.method).toBe('GET');
      req.flush(dummyCalender);
    });

    it('should call getEvents()', () => {
      service.getEvents().subscribe(events =>
        expect(events).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'calendar/events');
      expect(req.request.method).toBe('GET');
      req.flush(dummyEvents);
    });

    it('should call createEvent()', () => {
      service.createEvent(dummyEvents[0]).subscribe(event =>
        expect(event).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'calendar');
      expect(req.request.method).toBe('POST');
      req.flush(dummyEvents[0]);
    });

    it('should call editEvent()', () => {
      service.editEvent('c13a8ab4-d058-4e3c-b0fc-952d72650a35', dummyEvents[1]).subscribe(event =>
        expect(event).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'calendar/events/c13a8ab4-d058-4e3c-b0fc-952d72650a35');
      expect(req.request.method).toBe('PUT');
      req.flush(dummyEvents[1]);
    });

    it('should call deleteEvent()', () => {
      service.deleteEvent('dfd16c10-009c-4f72-9f8a-d33ff61ab6c2').subscribe(event =>
        expect(event).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'calendar/events/dfd16c10-009c-4f72-9f8a-d33ff61ab6c2');
      expect(req.request.method).toBe('DELETE');
      req.flush(dummyEvents[2]);
    });
  });
});

