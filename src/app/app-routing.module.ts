import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DrawComponent } from './components/draw/draw.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PlayersComponent } from './components/players/players.component';
import { RolesComponent } from './components/roles/roles.component';
import { TeamsComponent } from './components/teams/teams.component';

// const routes: Routes = [
// ];


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'equipment', component: EquipmentComponent},
  {path: 'roles', component: RolesComponent},
  // {path: 'plays', component: PlaysComponent},
  {path: 'draw', component: DrawComponent},
  {path: 'calendar', component: CalendarComponent},
  // {path: 'calendar/create', component: CreateEventComponent},
  // {path: 'calendar/edit/:id', component: EditEventsComponent},
  {path: 'games', component: GamesComponent},
  // {path: 'games/create', component: CreateGameComponent},
  // {path: 'games/edit/:id', component: EditGameComponent},
  // {path: 'players/details/:id', component: PlayerdetailsComponent},
  // {path: 'players/edit/:id', component: EditplayerComponent},
  // {path: 'players/create', component: CreatePlayerComponent},
  // {path: 'equipment/details/:id', component: EquipmentRequestDetailsComponent},
  // {path: 'equipment/edit/:id', component: EditEquipmentRequestComponent},
  // {path: "equipment/create", component: CreateEquipmentRequestComponent},
  {path: "messages", component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
