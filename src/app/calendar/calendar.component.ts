import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AccountService } from '../_services/account.service';
import { CalendarService } from '../_services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private calendarService: CalendarService, public accountService: AccountService, private router: Router, private route: ActivatedRoute) { }
  @ViewChild('calendar') model: any;//calendarService;
calendar: any

events:any = [];

  ngOnInit(): void {
    this.getCalendar();
    this.getEvents();
  }

  getCalendar() {
    this.calendarService.getCalendar().subscribe(response => { 
      this.model = response;
      console.log(this.model)
    }, err => {
      console.log(err);
    })  
  }

  getEvents() {
    this.calendarService.getEvents().subscribe(events => {
      this.events = events;
      console.log(events);
    }, err => {
      console.log(err);
    })
  }

  deleteEvent(eventId:string) {
    this.calendarService.deleteEvent(eventId).subscribe(event => {
      console.log(event);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], { relativeTo: this.route });
    }, err => {
      console.log(err);
    })
  }

}
