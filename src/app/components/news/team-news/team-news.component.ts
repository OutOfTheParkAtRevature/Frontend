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

  getArticles(): void {
    this.newsService.getTeamArticles().subscribe(articles => {
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
            let z: TeamArticle = this.articles[x];
            this.articles[x] = this.articles[pinCount];
            this.articles[pinCount] = z;
            pinCount++;
        }
    }
  }



}
