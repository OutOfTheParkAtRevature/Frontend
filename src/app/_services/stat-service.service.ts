import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, ObservedValueOf } from 'rxjs';
import { CreatePlayerGameDto }from '../_models/createPlayerGame';
import { PlayerGame } from '../_models/PlayerGame'
import { BaseballStatistic } from '../_models/BaseballStatistic';
import { TeamGame } from '../_models/TeamGame';
import { BasketballStatistic } from '../_models/BasketballStatistic';
import { CreateTeamGame } from '../_models/create-team-game';

@Injectable({
  providedIn: 'root'
})
export class StatServiceService {

  constructor( private http: HttpClient) { }

  baseUrl: string = "http://52.149.247.215/api/";


  //Gets stats for a player in a specific game
  getPlayerGameStatistic(playerId: string, gameId: string): Observable<PlayerGame>{
    return this.http.get<PlayerGame>(this.baseUrl + 'playerGames/' + playerId + '/' + gameId );
  }

  //Gets all stats for all players in all games
  getPlayerGameStatistics(): Observable<PlayerGame[]>{
    return this.http.get<PlayerGame[]>(this.baseUrl + 'playerGames/');
  }

  //Get all players overall stats
  getPlayersOverallStats(): Observable<PlayerGame[]>{
    return this.http.get<PlayerGame[]>(this.baseUrl + 'BaseballStatistics/player')
  }

  //Get a specific player's overall stats
  getPlayerOverallStats(playerId: string): Observable<PlayerGame>{
    return this.http.get<PlayerGame>(this.baseUrl + 'BaseballStatistics/player/' + playerId);
  }

  //create a stat for a player in a game
  createPlayerBaseballStatistic(playerGameDto: CreatePlayerGameDto): Observable<PlayerGame>{
    return this.http.post<PlayerGame>(this.baseUrl + 'playerGames',  playerGameDto);
  }

  //Gets stats for a team in a specific game
  getTeamGameStatistic(teamId: string, gameId: string): Observable<TeamGame>{
    return this.http.get<TeamGame>(this.baseUrl + 'teamGames/' + teamId + '/' + gameId );
  }

  //Gets stats for all teams in all games
  getTeamGameStatistics(): Observable<TeamGame[]>{
    return this.http.get<TeamGame[]>(this.baseUrl + 'teamGames/');
  }

  //Get all teams overall stats
  getTeamsOverallStats(): Observable<TeamGame[]>{
    return this.http.get<TeamGame[]>(this.baseUrl + 'BaseballStatistics/team')
  }

  //Get a specific team's overall stats
  getTeamOverallStats(teamId: string): Observable<TeamGame>{
    return this.http.get<TeamGame>(this.baseUrl + 'BaseballStatistics/team/' + teamId);
  }

  //create a team stat for a game
  createTeamBaseballStatistic(teamGameDto: CreateTeamGame ): Observable<TeamGame>{
    return this.http.post<TeamGame>(this.baseUrl + 'teamGames', teamGameDto);
  }

  editBaseballStatistic(statLineID: string, basballstatistic: BaseballStatistic): Observable<BaseballStatistic>{
    return this.http.put<BaseballStatistic>(this.baseUrl + 'BaseballStatistics/' + statLineID , basballstatistic);
  }

  deleteBaseballStatistic(statLineID: string): Observable<any>{
    return this.http.delete<any>(this.baseUrl + 'BaseballStatistics/' + statLineID);
  }

}
