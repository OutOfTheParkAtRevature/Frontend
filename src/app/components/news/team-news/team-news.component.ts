import { Component, OnInit } from '@angular/core';
import { Article } from '../../../_models/Article';
import { TeamArticle } from '../../../_models/Article';
import { AccountService } from '../../../_services/account.service';
import { NewsService } from '../../../_services/news.service';
import { UserService } from '../../../_services/user.service';


@Component({
  selector: 'app-team-news',
  templateUrl: './team-news.component.html',
  styleUrls: ['./team-news.component.css']
})
export class TeamNewsComponent implements OnInit {

  constructor(private newsService: NewsService, public accountService: AccountService, public userService: UserService) { }

  //news:any = [];
  articles: Array<TeamArticle> = new Array<TeamArticle>();

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.newsService.getTeamArticles().subscribe(articles => {
      this.articles = articles;
      console.log(articles);
    }, err => {
      console.log(err);
    })
  }



}
