import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* FullCalendar.io components */
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

/* Material Design components */
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

/* Bootstrap Components */
import { NgbModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DrawComponent } from './components/draw/draw.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavComponent } from './components/nav/nav.component';
import { PlayersComponent } from './components/players/players.component';
import { RolesComponent } from './components/roles/roles.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BearerAuthInterceptorService } from './_services/bearer-auth-interceptor.service';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DrawComponent,
    EquipmentComponent,
    GamesComponent,
    HomeComponent,
    MessagesComponent,
    NavComponent,
    PlayersComponent,
    RolesComponent,
    TeamsComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports: [NgbRating],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BearerAuthInterceptorService, multi:true } ],
  bootstrap: [AppComponent, NgbRating]
})
export class AppModule { }
