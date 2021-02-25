import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { User } from '@auth0/auth0-spa-js';
import { AccountService } from '../../../_services/account.service';
import { NewsService } from '../../../_services/news.service';
import { Article, LeagueArticle, TeamArticle } from '../../../_models/Article';
import { Team } from '../../../_models/Team';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  constructor(public accountService: AccountService, private newsService: NewsService, private route: ActivatedRoute, private router: Router) { }

  newArticle: TeamArticle | LeagueArticle;
  isTeam: boolean = true;
  teamList: Array<Team> = new Array<Team>();
  //userLoggedIn: User;



    //SET LOGINUSER TEAM TO PLACEHOLDER IN HTML

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.isTeam == 0)
      {
        this.isTeam = false;
        this.newArticle = new LeagueArticle();
      }
      else
        this.newArticle = new TeamArticle();

      this.accountService.currentUser$.subscribe((data) => this.newArticle.teamID = data.teamID);
    });
  }

  createArticle() 
  {
    this.newArticle.date = new Date();
    if (this.isTeam) {
      this.newsService.createTeamArticle(this.newArticle).subscribe(game => {
        console.log(game);
        this.router.navigate(['/teamNews'])
      }, err => {
        console.log(err);
      });
    } 
    else {
        this.newsService.createLeagueArticle(this.newArticle).subscribe(game => {
          console.log(game);
          this.router.navigate(['/leagueNews'])
        }, err => {
          console.log(err);
        });
    } 
  }
/*
  getLoggedInUser() {
    this.accountService.currentUser$.subscribe( user$ => {
      this.userLoggedIn = user$;
    })
  }
*/
}
