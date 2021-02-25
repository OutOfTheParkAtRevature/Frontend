
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
  baseUrl = "http://40.88.226.19/api/";
  constructor(private http: HttpClient) { }

  getCalendar(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl + 'calendar');
  }

  getEvents() {
    return this.http.get(this.baseUrl + 'calendar/events');
  }

  createEvent(model: Event): Observable<Event> {
    return this.http.post<Event>(this.baseUrl + `calendar`, model);
  }

  deleteEvent(eventId:string) {
    return this.http.delete(this.baseUrl + `calendar/events/${eventId}`);
  }

  editEvent(eventId:string, event:Event) {
    return this.http.put(this.baseUrl + `calendar/${eventId}`, event);
  }

}
