import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth0/auth0-spa-js';
import { AccountService } from '../../../_services/account.service';
import { NewsService } from '../../../_services/news.service';
import { Article } from '../../../_models/Article';
import { Team } from '../../../_models/Team';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  constructor(public accountService: AccountService, private newsService: NewsService, private router: Router) { }

  //newGame:any = {};
  //teamList:any = [];
  //userLoggedIn:any;
  newGame: Game;
  teamList: Array<Team> = new Array<Team>();
  userLoggedIn: User;

  ngOnInit(): void {
    this.getTeamList();
    this.getLoggedInUser();
  }

  createGame() {
    this.getAwayTeam();
    this.getHomeTeam();

    if (this.userLoggedIn.teamID == this.newGame.homeTeamId || this.userLoggedIn.teamID == this.newGame.awayTeamId) {
      this.gamesService.createGame(this.newGame).subscribe(game => {
        console.log(game);
        this.router.navigate(['/games'])
      }, err => {
        console.log(err);
      });
    } else {
      this.teamList.forEach(team => {
        if (team.teamID == this.userLoggedIn.teamID) {
          let teamName = team.name;
          alert(`Created game must include ${teamName}`);
        }
      });
      
    }

    
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
      this.userLoggedIn = user$;
    })
  }

}
