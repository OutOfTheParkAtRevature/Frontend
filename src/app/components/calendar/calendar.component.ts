import { Component, OnInit } from '@angular/core';

//Events from Calendar
import { Calendar } from '@fullcalendar/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { formatDate } from '@fullcalendar/angular';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { Event } from 'src/app/_models/Event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  eventDTO:Event[] = [
    {
      Name: "Event 1",
      Location: "Random Address 1",
      Message: "Some random message",
      StartTime: new Date(2021,1,8),
      EndTime: new Date(2021,1,8)
    },
    {
      Name: "Event 2",
      Location: "Random Address 2",
      Message: "Some random message #2",
      StartTime: new Date(2021,1,3),
      EndTime: new Date(2021,1,3)
    }
  ]

  constructor() { }

  ngOnInit(): void {

    let eventsFullCalendar = []

    this.eventDTO.forEach(element => {
      eventsFullCalendar.push( {
        title: element.Name,
        date: element.StartTime,
        // start: element.StartTime,
        // end: element.EndTime
       });
    });

    // { title: this.eventDTO, date: '2021-02-03' },
    // { title: 'event 2', date: '2021-02-06' },

    this.calendarOptions.events = eventsFullCalendar;
  }



  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    /* This throws an error during tests (- Tyler) */
    // dateClick: this.handleDateClick.bind(this), // bind is important!

    // /* Connect directly into Google Calendar */
    // eventSources: [
    //   {
    //     googleCalendarId: 'an9u076s37jti9ac4cn5fk9320@group.calendar.google.com'
    //   }
    // ],
    // plugins: [googleCalendarPlugin],
    // // THIS KEY WON'T WORK IN PRODUCTION!!!
    // // To make your own Google API key, follow the directions here:
    // // http://fullcalendar.io/docs/google_calendar/
    // googleCalendarApiKey: 'AIzaSyD1uF6AYdObDeTd6_ZdXivQ8ONR0_397aU',

    // //Toggle the weekend option on and off
    // weekends: false
    eventClick : (args) => {
      // opens events in a popup window
      console.log(args);
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
