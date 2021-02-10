import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ConsoleReporter } from 'jasmine';
import { AccountService } from 'src/app/_services/account.service';
import { CalendarService } from 'src/app/_services/calendar.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(public accountService: AccountService, private calendarService: CalendarService, private router: Router) { }

  event:any = {};

  ngOnInit(): void {
  }

  createEvent() {
    this.calendarService.createEvent(this.event).subscribe(event => {
      console.log(event);
      this.router.navigate(['/calendar'])
    }, err => {
      console.log(err);
    });
  }

}
