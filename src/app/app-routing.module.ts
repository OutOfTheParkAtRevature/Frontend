import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { RolesComponent } from './components/roles/roles.component';
import { DrawComponent } from './components/draw/draw.component';
import { PlayerdetailsComponent } from './components/players/playerdetails/playerdetails.component';
import { EditplayerComponent } from './components/players/editplayer/editplayer.component';
import { EquipmentRequestDetailsComponent } from './components/equipment/equipment-request-details/equipment-request-details.component';
import { EditEquipmentRequestComponent } from './components/equipment/edit-equipment-request/edit-equipment-request.component';
import { PlaysComponent } from './components/draw/plays/plays.component';
import { CreateEquipmentRequestComponent } from './components/equipment/create-equipment-request/create-equipment-request.component';
import { CreatePlayerComponent } from './components/players/create-player/create-player.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { GamesComponent } from './components/games/games.component';
import { CreateGameComponent } from './components/games/create-game/create-game.component';
import { EditGameComponent } from './components/games/edit-game/edit-game.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
//import { CreateEventComponent } from './components/calendar/create-event/create-event.component';
//import { EditEventsComponent } from './components/calendar/edit-events/edit-events.component';
import { TeamNewsComponent } from './components/news/team-news/team-news.component';
import { LeagueNewsComponent } from './components/news/league-news/league-news.component';
import { EditArticleComponent } from './components/news/edit-article/edit-article.component';
import { CreateArticleComponent } from './components/news/create-article/create-article.component';
import { RegisterComponent } from './components/home/register/register.component';
import { StatsComponent } from './components/stats/stats.component';


const routes: Routes = [
  {path: 'draw/:id', component: DrawComponent},
  //{path: '', component: HomeComponent},
  {path: '', component: LeagueNewsComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'equipment', component: EquipmentComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'plays', component: PlaysComponent},
  {path: 'draw', component: DrawComponent},
  {path: 'calendar', component: CalendarComponent},
  //{path: 'calendar/create', component: CreateEventComponent},
  //{path: 'calendar/edit/:id', component: EditEventsComponent},
  {path: 'games', component: GamesComponent},
  {path: 'games/create', component: CreateGameComponent},
  {path: 'games/edit/:id', component: EditGameComponent},
  {path: 'players/details/:id', component: PlayerdetailsComponent},
  {path: 'players/edit/:id', component: EditplayerComponent},
  {path: 'players/create', component: CreatePlayerComponent},
  {path: 'equipment/details/:id', component: EquipmentRequestDetailsComponent},
  {path: 'equipment/edit/:id', component: EditEquipmentRequestComponent},
  {path: "equipment/create", component: CreateEquipmentRequestComponent},
  {path: "messages", component: MessagesComponent},
  {path: "teamNews", component: TeamNewsComponent},
  {path: "leagueNews", component: LeagueNewsComponent},
  {path: "article/edit/:id/:isTeam", component: EditArticleComponent},
  {path: "article/create/:isTeam", component: CreateArticleComponent},
  {path: "register", component: RegisterComponent},
  {path: "auth", component: AuthenticationComponent},
  {path: "home", component: HomeComponent},
  {path: 'stats', component: StatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }