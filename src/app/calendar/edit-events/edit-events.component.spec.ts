import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { EditEventsComponent } from './edit-events.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditEventsComponent', () => {
  let component: EditEventsComponent;
  let fixture: ComponentFixture<EditEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ EditEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEvent()', () => {
    component.eventId = 0;
    component.eventId = 1;
    component.eventsArr = [{}];
    component.eventsArr[0].id = 1
    component.getEvent();
  });

  it('should call editEvent()', () => {
    component.editedEvent.description = null;
    component.editedEvent.message = null;
    component.editedEvent.location = null;
    component.editedEvent.startTime = null;
    component.editedEvent.endTime = null;

    let start = {};
    let end = {};
    component.event.summary = "hi";
    component.event.description = "there";
    component.event.location = "fellow";
    component.event.start = start;
    component.event.start.dateTime = "what's"
    component.event.end = end;
    component.event.end.dateTime = "up";
    component.editEvent("1");
  });
});
