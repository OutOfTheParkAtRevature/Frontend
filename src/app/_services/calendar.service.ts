
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

//ASK ANTHONY WHAT IS CALENDAR
export class CalendarService {

  //baseUrl = environment.apiUrl;
  baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getCalendar(): Observable<any> {
    return this.http.get(this.baseUrl + 'calendar');
  }

  getEvents() {
    return this.http.get(this.baseUrl + 'calendar/events');
  }

  createEvent(model: any) {
    return this.http.post(this.baseUrl + `calendar`, model);
  }

  deleteEvent(eventId:string) {
    return this.http.delete(this.baseUrl + `calendar/events/${eventId}`);
  }

  editEvent(eventId:string, event:any) {
    return this.http.put(this.baseUrl + `calendar/events/${eventId}`, event);
  }

}
