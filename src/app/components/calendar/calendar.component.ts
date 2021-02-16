import { Component, OnInit } from '@angular/core';
//Events from Calendar
import { Calendar } from '@fullcalendar/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { formatDate } from '@fullcalendar/angular';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { Event } from 'src/app/_models/Event';
import { CalendarService } from 'src/app/_services/calendar.service';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  eventDTO:Event[];
  selectedEvent: Event;
  removeEvent: boolean;

  constructor( private _calendar : CalendarService, private modalService: NgbModal, config: NgbModalConfig ) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {

    this._calendar.getCalendar().subscribe(
      dataOnSuccess => {
        console.log(dataOnSuccess);
        this.eventDTO = dataOnSuccess.events;

        this.displayElementsIntoCalendar();

      },
      dataOnError => {
        console.log("Error ", dataOnError);
      }
    );
  }



  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
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

  

  handleDateClick(arg): void {
    alert('date click! ' + arg.dateStr)

    console.log(arg);
    // let str = formatDate(new Date(), {
    //   month: 'long',
    //   year: 'numeric',
    //   day: 'numeric'
    // });
    
    // console.log(str);
  }

  ///Display the events to FullCalendar.io
  displayElementsIntoCalendar(): void {
    let eventsFullCalendar = []

    this.eventDTO.forEach(element => {
      eventsFullCalendar.push( { 
        title: element.Name,
        date: element.StartTime,
        // start: element.StartTime,
        // end: element.EndTime
       });
    });

    this.calendarOptions.events = eventsFullCalendar;  
  }

  EditDialog(content, event : Event) :void {
    this.selectedEvent = event;
    this.removeEvent = false;
    this.modalService.open(content);
  }

  RemoveEvent():void {
    //Do some remove event logic

    this.CloseModal();
  }

  DeleteDialog(content, event : Event) :void {
    this.selectedEvent = event;
    this.modalService.open(content);
    this.removeEvent = true;
  }

  CloseModal () {
    this.selectedEvent = new Event();
    this.modalService.dismissAll('Close click') 
  }

}
