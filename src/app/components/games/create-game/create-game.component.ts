import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { User } from '@auth0/auth0-spa-js';
import { AccountService } from '../../../_services/account.service';
import { GamesService } from '../../../_services/games.service';
import { Game } from '../../../_models/Game';
import { Team } from '../../../_models/Team';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  constructor(public accountService: AccountService, private gamesService: GamesService, private router: Router) { }

  //newGame:any = {};
  //teamList:any = [];
  //userLoggedIn:any;
  newGame: Game;
  teamList: Array<Team> = new Array<Team>();
  // userLoggedIn: User;

  ngOnInit(): void {
    this.getTeamList();
    this.getLoggedInUser();
  }

  createGame() {
    this.getAwayTeam();
    this.getHomeTeam();

    // if (this.userLoggedIn.teamID == this.newGame.homeTeamId || this.userLoggedIn.teamID == this.newGame.awayTeamId) {
    //   this.gamesService.createGame(this.newGame).subscribe(game => {
    //     console.log(game);
    //     this.router.navigate(['/games'])
    //   }, err => {
    //     console.log(err);
    //   });
    // } else {
    //   this.teamList.forEach(team => {
    //     if (team.id == this.userLoggedIn.teamID) {
    //       let teamName = team.name;
    //       alert(`Created game must include ${teamName}`);
    //     }
    //   });
      
    // }

    
  }

  getTeamList() {
    this.gamesService.getTeams().subscribe(teams => {
      this.teamList = teams;
      console.log(teams);
    }, err => {
      console.log(err);
    });
  }

  getLoggedInUser() {
    this.accountService.currentUser$.subscribe( user$ => {
      // this.userLoggedIn = user$;
    })
  }

  getHomeTeam() {
    for (let i = 0; i < this.teamList.length; i++) {
      if (this.teamList[i].name == this.newGame.homeTeam.name) {
        this.newGame.homeTeamID = this.teamList[i].id;
      }
    }
  }

  getAwayTeam() {
    for (let i = 0; i < this.teamList.length; i++) {
      if (this.teamList[i].name == this.newGame.awayTeam.name) {
        this.newGame.awayTeamID = this.teamList[i].id;
      }
    }
  }

}
