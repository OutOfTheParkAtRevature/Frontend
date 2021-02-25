import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CreateGame } from '../_models/create-game';
import { EditGame } from '../_models/edit-game';
import { Game } from '../_models/Game';
import { Season } from '../_models/season';
import { Team } from '../_models/Team';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  //baseUrl = environment.apiUrl;
  teamUrl: string = "http://20.62.247.144/api/";
  baseUrl: string = "http://40.88.224.69/api/";
  //baseUrl: string = "http://localhost:3000/";

  getGames(): Observable<Game[]> 
  {
    return this.http.get<Game[]>(this.baseUrl + 'Game');
    //return this.http.get<Game[]>(this.baseUrl + 'games');
  }

  getGame(id: string): Observable<Game>
  {
    return this.http.get<Game>(this.baseUrl + 'Game/' + id);
    //return this.http.get<Game>(this.baseUrl + `games/${id}`);
  }

  createGame(game: CreateGame): Observable<Game>
  {
    return this.http.post<Game>(this.baseUrl + 'Game/', game);
    //return this.http.post<Game>(this.baseUrl + 'games', game);
  }

  editGame(game: EditGame, id: string): Observable<Game>
  {
    return this.http.put<Game>(this.baseUrl + 'Game/' + id, game);
    //return this.http.put<Game>(this.baseUrl + `games/${id}`, game);
  }

  deleteGame(id: string): Observable<any>{
    return this.http.delete<any>(this.baseUrl + 'Game/' + id);
  }

  getGamesBySeason(id: string): Observable<Game[]>{
    return this.http.get<Game[]>(this.baseUrl + 'season/' + id + '/games');
  }

  getSeasons(): Observable<Season[]>{
    return this.http.get<Season[]>(this.baseUrl + 'season');
  }

  getSeason(id: string): Observable<Season>{
    return this.http.get<Season>(this.baseUrl + 'season/' + id);
  }

  createSeason(): Observable<Season>{
    return this.http.post<Season>(this.baseUrl + 'season', null);
  }

  
  getTeams(): Observable<Team[]>
  {
    return this.http.get<Team[]>(this.teamUrl + 'team');
    //return this.http.get<Team[]>(this.teamUrl + 'teams');
  }

  getTeam(id: string): Observable<Team>
  {
    return this.http.get<Team>(this.teamUrl + 'team/' + id);
   // return this.http.get<Team>(this.teamUrl + 'teams/' + id);
  }

  updateTeam(team: Team, id: string): Observable<Team>
  {
    return this.http.put<Team>(this.teamUrl + 'team/' + id, team);
    //return this.http.put<Team>(this.teamUrl + 'teams/' + id, team);
  }

}
