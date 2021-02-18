import { Component, OnInit } from '@angular/core';
import { Article } from '../../../_models/Article';
import { LeagueArticle } from '../../../_models/Article';
import { AccountService } from '../../../_services/account.service';
import { NewsService } from '../../../_services/news.service';
import { UserService } from '../../../_services/user.service';


@Component({
  selector: 'app-league-news',
  templateUrl: './league-news.component.html',
  styleUrls: ['./league-news.component.css']
})
export class LeagueNewsComponent implements OnInit {

  constructor(private newsService: NewsService, public accountService: AccountService, public userService: UserService) { }

  //news:any = [];
  articles: Array<LeagueArticle> = new Array<LeagueArticle>();

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.newsService.getLeagueArticles().subscribe(articles => {
      this.articles = articles;
      this.sortArticles();
      console.log(articles);
    }, err => {
      console.log(err);
    })
  }

  sortArticles(): void
  {
    //Put pinned articles on top
    let pinCount = 0;
    for(let x = 0; x < this.articles.length; x++)
    {
        if(this.articles[x].isPinned)
        {
            let z: LeagueArticle = this.articles[x];
            this.articles[x] = this.articles[pinCount];
            this.articles[pinCount] = z;
            pinCount++;
        }
    }
  }



}
