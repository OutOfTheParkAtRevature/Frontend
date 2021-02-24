import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, ObservedValueOf } from 'rxjs';
import { CreatePlayerGameDto }from '../_models/createPlayerGame';
import { PlayerGame } from '../_models/PlayerGame'
import { BaseballStatistic } from '../_models/BaseballStatistic';

@Injectable({
  providedIn: 'root'
})
export class StatServiceService {

  constructor( private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/";


  getBassballStatistic(playerId: string, gameId: string): Observable<CreatePlayerGameDto>{
    return this.http.get<CreatePlayerGameDto>(this.baseUrl + 'playerGames/' + playerId + '/' + gameId );
  }
  
  createBaseBallStatistic(playerGameDto: CreatePlayerGameDto ): Observable<PlayerGame>{
    return this.http.post<PlayerGame>(this.baseUrl + 'playerGames',  playerGameDto );

  }

  editBaseballStatistic(statLineID: string, basballstatistic: BaseballStatistic): Observable<BaseballStatistic>{
    return this.http.put<BaseballStatistic>(this.baseUrl + 'BaseballStatistics/' + statLineID , basballstatistic);
  }

}
