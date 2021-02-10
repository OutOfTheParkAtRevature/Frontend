import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { GamesService } from 'src/app/_services/games.service';
import { Game } from '../../_models/Game';
import { Team } from '../../_models/Team';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gamesService: GamesService, private router: Router, public accountService: AccountService) { }

  gameId: number;
  //game:any = {};
  editedGame:any = {};
  //homeTeam:any = {};
  //awayTeam:any = {};
  //winningTeam:any = {};
  //losingTeam:any = {};
  game: Game;
  //editedGame: Game;
  homeTeam: Team;
  awayTeam: Team;
  winningTeam: Team;
  losingTeam: Team;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameId = params.Id;
    });
    this.getGame();
  }

  getGame() {
    this.gamesService.getGame(this.gameId).subscribe(game => {
      this.game = game;
      console.log(this.game)
      this.getHomeTeam();
      this.getAwayTeam();
    }, err => {
      console.log(err);
    })
  }

  getHomeTeam() {
    this.gamesService.getTeam(this.game.homeTeamId).subscribe(team => {
      this.homeTeam = team;
    })
  }

  getAwayTeam() {
    this.gamesService.getTeam(this.game.awayTeamId).subscribe(team => {
      this.awayTeam = team;
    })
  }

  editGame() {
    if (this.editedGame.homeScore > this.editedGame.awayScore) {
      this.editedGame.winningTeamId = this.game.homeTeamId;
      this.editedGame.losingTeamId = this.game.awayTeamId;
    } else {
      this.editedGame.winningTeamId = this.game.awayTeamId;
      this.editedGame.losingTeamId = this.game.homeTeamId;
    }
    this.editedGame.homeTeamId = this.game.homeTeamId;
    this.editedGame.awayTeamId = this.game.awayTeamId;

    this.gamesService.editGame(this.editedGame, this.gameId).subscribe(game => {
      console.log(game);
      this.updateTeamWins();
      this.updateTeamLosses();
      this.router.navigate(['/games'])
    }, err => {
      console.log(err);
    })
  }

  updateTeamWins() {
    this.gamesService.getTeam(this.editedGame.winningTeamId).subscribe(team => {
      this.winningTeam = team;
      this.updateWins();
    }, err => {
      console.log(err);
    });
  }

  updateWins() {
    this.winningTeam.wins ++;
    this.gamesService.updateTeam(this.winningTeam, this.editedGame.winningTeamId).subscribe(team => {
      console.log(team);
    }, err => {
      console.log(err);
    }) 
  }

  updateTeamLosses() {
    this.gamesService.getTeam(this.editedGame.losingTeamId).subscribe(team => {
      this.losingTeam = team;
      this.updateLosses();
    }, err => {
      console.log(err);
    });
  }

  updateLosses() {
    this.losingTeam.losses ++;
    this.gamesService.updateTeam(this.losingTeam, this.editedGame.losingTeamId).subscribe(team => {
      console.log(team);
    }, err => {
      console.log(err);
    })
  }

}
