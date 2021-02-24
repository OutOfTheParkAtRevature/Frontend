import { Component, OnInit } from '@angular/core';
import { Game } from '../../_models/Game';
import { AccountService } from '../../_services/account.service';
import { GamesService } from '../../_services/games.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private gamesService: GamesService, public accountService: AccountService, public userService: UserService) { }

  //games:any = [];
  games: Array<Game> = new Array<Game>();

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.gamesService.getGames().subscribe(games => {
      this.games = games;
      console.log(games);
      // this.getHomeTeams();
      // this.getAwayTeams();
      // this.getWinningTeams();
      this.setTimes();
    }, err => {
      console.log(err);
    })
  }

  setTimes() {
    this.games.forEach(game => { 
      //game.test = new Date(game.gameDate);
      //console.log(game.test);
      game.gameDate = new Date(game.gameDate);
      console.log(game.gameDate);
    })
  }

  // getHomeTeams() {
  //   this.games.forEach(game => {
  //     return this.gamesService.getTeam(game.homeTeamId).subscribe(team => {
  //       game.homeTeam = team;
  //     }, err => {
  //       console.log(err);
  //     })
  //   });
  // }

  // getAwayTeams() {
  //   this.games.forEach(game => {
  //     return this.gamesService.getTeam(game.awayTeamId).subscribe(team => {
  //       game.awayTeam = team;
  //     }, err => {
  //       console.log(err);
  //     })
  //   });
  // }

  // getWinningTeams() {
  //   this.games.forEach(game => {
  //     return this.gamesService.getTeam(game.winningTeam).subscribe(team => {
  //       game.winningTeam = team;
  //     }, err => {
  //       console.log(err);
  //     })
  //   })
  // }
}
