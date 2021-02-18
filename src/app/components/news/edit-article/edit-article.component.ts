import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../_services/account.service';
import { NewsService } from '../../../_services/news.service';
import { Article, TeamArticle, LeagueArticle } from '../../../_models/Article';
import { Team } from '../../../_models/Team';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router, public accountService: AccountService) { }

  articleId: number;
  isTeam: boolean = true;
  editedArticle: Article | TeamArticle | LeagueArticle;
  article: Article | TeamArticle | LeagueArticle;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleId = params.id;
      if(params.isTeam == 0)
      {
          this.isTeam = false;
          this.editedArticle = new TeamArticle();
      }
      else
          this.editedArticle = new LeagueArticle();
    });
    this.getArticle();
  }

  getArticle(): void 
  {
    if(this.isTeam)
    {
        this.newsService.getTeamArticle(this.articleId).subscribe
        (
            data => 
            {
                this.article = data;
                console.log(data);
            }, 
            err => console.log(err)
        );
    }
    else
    {
        this.newsService.getLeagueArticle(this.articleId).subscribe
        (
            data => 
            {
                this.article = data;
                console.log(data);
            }, 
            err => console.log(err)
        );
    }
  }

  editArticle() : void
  {
      this.editedArticle.date = new Date();
    if(this.isTeam)
    {
        this.newsService.editTeamArticle(this.editedArticle, this.articleId).subscribe
        (
            () => this.router.navigate(['/teamNews']),
            (err) => console.log(err)
        );
    }
    else
    {
        this.newsService.editLeagueArticle(this.editedArticle, this.articleId).subscribe
        (
            () => this.router.navigate(['/teamNews']),
            (err) => console.log(err)
        );
    }
  }

}
