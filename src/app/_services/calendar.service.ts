
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Event } from '../_models/Event';

@Injectable({
  providedIn: 'root'
})

//ASK ANTHONY WHAT IS CALENDAR
export class CalendarService {

  //baseUrl = environment.apiUrl;
  baseUrl = "http://20.185.102.169/api/";
  //baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getCalendar(): Observable<any> {
    //return this.http.get<Event[]>(this.baseUrl + 'calendar');
    return this.http.get<any>(this.baseUrl + 'Calendar');
  }

  getEvents() {
    //return this.http.get<Event[]>(this.baseUrl + 'calendar/events');
    return this.http.get<Event[]>(this.baseUrl + 'Calendar/events');
  }

  createEvent(model: Event): Observable<Event> {
    //return this.http.post<Event>(this.baseUrl + `calendar`, model);
    return this.http.post<Event>(this.baseUrl + `Calendar`, model);
  }

  deleteEvent(eventId:string) {
    //return this.http.delete(this.baseUrl + `calendar/events/${eventId}`);
    return this.http.delete(this.baseUrl + `Calendar/events/${eventId}`);
  }

  editEvent(eventId:string, event:Event) {
    //return this.http.put(this.baseUrl + `calendar/${eventId}`, event);
    return this.http.put(this.baseUrl + `Calendar/events/${eventId}`, event);
  }

}
