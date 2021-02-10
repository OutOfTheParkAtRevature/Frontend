import { Component, OnInit } from '@angular/core';

//Events from Calendar
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { formatDate } from '@fullcalendar/angular';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  eventDto = [
    { title: 'event 1', date: '2021-02-03' },
    { title: 'event 2', date: '2021-02-06' }, 
  ]

  constructor() { }

  ngOnInit(): void {
    this.calendarOptions.events = this.eventDto;  
  }



  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    /* Connect directly into Google Calendar */
    eventSources: [
      {
        googleCalendarId: 'an9u076s37jti9ac4cn5fk9320@group.calendar.google.com'
      }
    ],
    plugins: [googleCalendarPlugin],
    // THIS KEY WON'T WORK IN PRODUCTION!!!
    // To make your own Google API key, follow the directions here:
    // http://fullcalendar.io/docs/google_calendar/
    googleCalendarApiKey: 'AIzaSyD1uF6AYdObDeTd6_ZdXivQ8ONR0_397aU',
    
    // //Toggle the weekend option on and off
    // weekends: false
    eventClick : (args) => {
      // opens events in a popup window
      window.open(args.event.url, '_blank', 'width=700,height=600');
      // prevents current tab from navigating
      args.jsEvent.preventDefault();
    }
  };


  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)

    console.log(arg);
    // let str = formatDate(new Date(), {
    //   month: 'long',
    //   year: 'numeric',
    //   day: 'numeric'
    // });
    
    // console.log(str);
  }


}
