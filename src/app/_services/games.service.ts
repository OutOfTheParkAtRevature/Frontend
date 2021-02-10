import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../_models/Game';
import { Team } from '../_models/Team';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  //baseUrl = environment.apiUrl;
  baseUrl: string = "http://localhost:3000/";

  getGames(): Observable<Game[]> 
  {
    //return this.http.get(this.baseUrl + 'games');
    return this.http.get<Game[]>(this.baseUrl + 'games');
  }

  getGame(id: number): Observable<Game>
  {
    //return this.http.get(this.baseUrl + `games/${id}`);
    return this.http.get<Game>(this.baseUrl + 'games/' + id);
  }

  createGame(game: Game): Observable<Game>
  {
    //return this.http.post(this.baseUrl + 'games', game);
    return this.http.post<Game>(this.baseUrl + 'games', game);
  }

  editGame(game: Game, id: number): Observable<Game>
  {
    //return this.http.put(this.baseUrl + `games/edit/${id}`, game);
    return this.http.put<Game>(this.baseUrl + 'games/' + id, game);
  }

  getTeams(): Observable<Team[]>
  {
    //return this.http.get(this.baseUrl + 'teams');
    return this.http.get<Team[]>(this.baseUrl + 'teams');
  }

  getTeam(id: number): Observable<Team>
  {
    //return this.http.get(this.baseUrl + `teams/${id}`);
    return this.http.get<Team>(this.baseUrl + 'teams/' + id);
  }

  updateTeam(team: Team, id: number): Observable<Team>
  {
    //return this.http.put(this.baseUrl + `teams/edit/${id}`, team);
    return this.http.put<Team>(this.baseUrl + 'teams/' + id, team);
  }

}
