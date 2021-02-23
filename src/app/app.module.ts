import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* FullCalendar.io components */
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

/* Material Design components */
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

/* Bootstrap Components */
import { NgbModule /*, NgbRating */, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AppRoutingModule } from './app-routing.module';
import { PlayerdetailsComponent } from './components/players/playerdetails/playerdetails.component';
import { EditplayerComponent } from './components/players/editplayer/editplayer.component';
import { EquipmentRequestDetailsComponent } from './components/equipment/equipment-request-details/equipment-request-details.component';
import { EditEquipmentRequestComponent } from './components/equipment/edit-equipment-request/edit-equipment-request.component';
import { PlaysComponent } from './components/draw/plays/plays.component';
import { CreateEquipmentRequestComponent } from './components/equipment/create-equipment-request/create-equipment-request.component';
import { CreatePlayerComponent } from './components/players/create-player/create-player.component';
import { CreateGameComponent } from './components/games/create-game/create-game.component';
import { EditGameComponent } from './components/games/edit-game/edit-game.component';
//import { CreateEventComponent } from './components/calendar/create-event/create-event.component';
//import { EditEventsComponent } from './components/calendar/edit-events/edit-events.component';
import { TeamNewsComponent } from './components/news/team-news/team-news.component';
import { LeagueNewsComponent } from './components/news/league-news/league-news.component';
import { EditArticleComponent } from './components/news/edit-article/edit-article.component';
import { CreateArticleComponent } from './components/news/create-article/create-article.component';
import { RegisterComponent } from './components/home/register/register.component';
import { AccountService } from './_services/account.service';
import { CalendarService } from './_services/calendar.service';
import { DrawService } from './_services/draw.service';
import { EquipmentService } from './_services/equipment.service';
import { GamesService } from './_services/games.service';
import { MessageService } from './_services/message.service';
import { NewsService } from './_services/news.service';
import { UserService } from './_services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BearerAuthInterceptorService } from './_services/bearer-auth-interceptor.service';
import { InboxMessageComponent } from './components/messages/inbox-message/inbox-message.component';
import { StatsComponent } from './components/stats/stats.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TeamsComponent,
    EquipmentComponent,
    RolesComponent,
    NavComponent,
    DrawComponent,
    PlayerdetailsComponent,
    EditplayerComponent,
    EquipmentRequestDetailsComponent,
    EditEquipmentRequestComponent,
    PlaysComponent,
    CreateEquipmentRequestComponent,
    CreatePlayerComponent,
    CalendarComponent,
    HomeComponent,
    MessagesComponent,
    GamesComponent,
    CreateGameComponent,
    EditGameComponent,
    InboxMessageComponent,
    AuthenticationComponent,
    //CreateEventComponent,
    //EditEventsComponent,
    TeamNewsComponent,
    LeagueNewsComponent,
    EditArticleComponent,
    CreateArticleComponent,

    RegisterComponent,
    StatsComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FullCalendarModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BearerAuthInterceptorService, multi:true },
      AccountService,
      CalendarService,
      DrawService,
      EquipmentService,
      GamesService,
      MessageService,
      NewsService,
      UserService,
      NgbModalConfig
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
