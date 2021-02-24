import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, ObservedValueOf } from 'rxjs';
import { CreatePlayerGame}from '../_models/create-player-game';
import { PlayerGame } from '../_models/PlayerGame'
import { BaseballStatistic } from '../_models/BaseballStatistic';
import { playerGameStat } from '../_models/PlayerGameStatDto'
@Injectable({
  providedIn: 'root'
})
export class StatServiceService {

  constructor( private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/";


  getBassballStatistic(playerId: string, gameId: string): Observable<playerGameStat>{
    return this.http.get<playerGameStat>(this.baseUrl + 'playerGames/' + playerId + '/' + gameId );
  }
  
  createBaseBallStatistic(playerGameDto: CreatePlayerGame ): Observable<PlayerGame>{
    return this.http.post<PlayerGame>(this.baseUrl + 'playerGames',  playerGameDto );

  }

  editBaseballStatistic(statLineID: string, basballstatistic: BaseballStatistic): Observable<BaseballStatistic>{
    return this.http.put<BaseballStatistic>(this.baseUrl + 'BaseballStatistics/' + statLineID , basballstatistic);
  }

}
