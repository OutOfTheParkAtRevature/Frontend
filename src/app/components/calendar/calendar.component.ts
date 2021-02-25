import { Component, OnInit } from '@angular/core';
//Events from Calendar
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { Event } from 'src/app/_models/Event';
import { CalendarService } from 'src/app/_services/calendar.service';
import { NgbCalendar, NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  eventDTO:Event[];
  selectedEvent: Event = new Event();
  removeEvent: boolean;

  EventStartTime: NgbTimeStruct = this.GetDefaultTime();
  EventEndTime: NgbTimeStruct = this.GetDefaultTime();
  EventStartDate: NgbDateStruct= this.calendar.getToday();
  EventEndDate: NgbDateStruct = this.calendar.getToday();
  hourStep: number = 1;
  minuteStep: number = 15;
  // @ViewChild('NewEvent') newEventInput;
  
  constructor( private _calendar : CalendarService, private modalService: NgbModal, config: NgbModalConfig, private calendar: NgbCalendar,  public accountService: AccountService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  

  ngOnInit(): void {

    this._calendar.getCalendar().subscribe(
      dataOnSuccess => {
        console.log(dataOnSuccess);
        this.eventDTO = dataOnSuccess;

        this.displayElementsIntoCalendar();

      },
      dataOnError => {
        console.log("Error ", dataOnError);
      }
    );

  }


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    // eventColor: '#2ba0ba',
    themeSystem: 'bootstrap',

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
      // window.open(args.event.url, '_blank', 'width=700,height=600');
      // prevents current tab from navigating
      // args.jsEvent.preventDefault();
    }
  };

  
  
  handleDateClick(arg): void {
    // alert('date click! ' + arg.dateStr)
    console.log(arg);
    // this.newEventInput.nativeElement
    // this.modalService.open(this.newEventInput.nativeElement);

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
      
      this.UpdateEventsInCalendar(eventsFullCalendar);
    }
    
    UpdateEventsInCalendar( eventsFullCalendar: any[]): void {
      this.calendarOptions.events = eventsFullCalendar;
    }

  InitializeDateTimeData():void {
    this.EventStartTime = this.GetDefaultTime();
    this.EventEndTime = this.GetDefaultTime();
    this.EventStartDate = this.calendar.getToday();
    this.EventEndDate = this.EventStartDate;
  }

  GetDefaultTime():NgbTimeStruct{
    return {hour: 13, minute: 30, second: 0};
  }

  GetTimeFromEvent(date: Date): NgbTimeStruct{
    let tempDate: Date = new Date(date);
    return {hour: tempDate.getHours(), minute: tempDate.getMinutes(), second: 0};
  }
  
  GetDateFromNgDateStruct(date: Date) : NgbDateStruct{
    let tempDate: Date = new Date(date);
    return  { day: tempDate.getDay(), month: tempDate.getMonth() + 1, year: tempDate.getFullYear()};
  }

  createNewEventDialog(content): void{
      this.selectedEvent = new Event();
      this.InitializeDateTimeData();
      this.modalService.open(content);
  }
  
  EditDialog(content, event : Event) :void {
    this.selectedEvent = event;
    //Set the date and time from the DateTime...
    this.EventStartTime = this.GetTimeFromEvent(event.StartTime);
    // console.log(this.EventStartTime)
    this.EventEndTime = this.GetTimeFromEvent(event.EndTime);
    this.EventStartDate = this.GetDateFromNgDateStruct(event.StartTime);
    this.EventEndDate = this.GetDateFromNgDateStruct(event.EndTime);
    // console.log(event, this.EventStartDate);
    
    this.removeEvent = false;
    this.modalService.open(content);
  }
  
  
  AddNewEvent( eventForm): void{
    //Generate the correct Event
    
    
    //Force the form to be valid
    if (eventForm.valid )
    {
      
      this.selectedEvent.StartTime = this.AssignDate(this.EventStartDate, this.EventStartTime);
      this.selectedEvent.EndTime = this.AssignDate(this.EventEndDate, this.EventEndTime)
      
      if ( 
          (this.selectedEvent.StartTime.toDateString() === this.selectedEvent.EndTime.toDateString())
            &&
          ( this.selectedEvent.StartTime.getHours() < this.selectedEvent.EndTime.getHours() )
         )
      {
        //Some Add logic to ws
        this._calendar.createEvent(this.selectedEvent).subscribe(
          dataOnSuccess => {
            //Add to the event table
            console.log(dataOnSuccess);
            this.eventDTO.push(dataOnSuccess);
            
            this.displayElementsIntoCalendar();
            
          },
          dataOnError => {
            console.log("Error => ", dataOnError)
          }
          );
          
          this.CloseModal();
      }
      else{
        //some edit label in red if not valid..
        console.log("Input diferent time from start to end.");
        }

      }
      else{
        //some edit label in red if not valid..
        console.log("Requested info not valid.");
      }
  }

  AssignDate(EventDate: NgbDateStruct, EventTime: NgbTimeStruct) : Date
  {
    return new Date(`${EventDate.year}-${EventDate.month}-${EventDate.day} ${EventTime.hour}:${EventTime.minute}`)
  }

  editEvent( eventForm ) :void {
    //Do some update event logic
    // event.preventDefault();
    // console.log(eventForm.value, eventForm.valid);

    //Force the form to be valid
    if (eventForm.valid)
    {
      this.selectedEvent.StartTime = this.AssignDate(this.EventStartDate, this.EventStartTime);
      this.selectedEvent.EndTime = this.AssignDate(this.EventEndDate, this.EventEndTime);

      //Some Add logic to ws
      this._calendar.editEvent(this.selectedEvent.id, this.selectedEvent).subscribe(
        dataOnSuccess=> {
          console.log("Success", dataOnSuccess);


          this.displayElementsIntoCalendar();
        },
        dataOnError => {
          console.log("Error => ", dataOnError);
        }
      );

      this.CloseModal();
    }
    else{
      //some edit label in red if not valid..
    }
  }

  RemoveEvent():void {
    //Do some remove event logic


    let eventIndex = this.eventDTO.indexOf(this.selectedEvent);
    if (eventIndex > -1) {
      this.eventDTO.splice(eventIndex, 1);
    }
    //Event ID for identifying the element. 
    // this.selectedEvent.Name
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
