import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { CalendarService } from 'src/app/_services/calendar.service';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private calendarService: CalendarService, public accountService: AccountService, private router: Router) { }

  eventId:any;
  eventsArr: any = [];
  event:any = {};
  editedEvent:any ={};

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params.id;
    });
    this.getEvents();
  }

  getEvents() {
    this.calendarService.getEvents().subscribe(events => {
      this.eventsArr = events;
      this.getEvent();
    }, err => {
      console.log(err);
    })
  }

  getEvent() {
    this.eventsArr.forEach(event => {
      if (event.id === this.eventId) {
        this.event = event;
        console.log(event);
      }
    });
  }

  editEvent(id:string) {
    if (!this.editedEvent.description) {this.editedEvent.description = this.event.summary;}
    if (!this.editedEvent.message) {this.editedEvent.message = this.event.description;}
    if (!this.editedEvent.location) {this.editedEvent.location = this.event.location;}
    if(!this.editedEvent.startTime) {this.editedEvent.startTime = this.event.start.dateTime;}
    if(!this.editedEvent.endTime) {this.editedEvent.endTime = this.event.end.dateTime;}
    this.calendarService.editEvent(id, this.editedEvent).subscribe(event => {
      this.router.navigate([`/calendar`]);
    }, err => {
      console.log(err);
    })
  }

}
