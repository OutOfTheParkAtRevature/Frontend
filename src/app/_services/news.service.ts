import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Article } from '../_models/Article';
import { LeagueArticle } from '../_models/Article';
import { TeamArticle } from '../_models/Article';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  //baseUrl = environment.apiUrl;
  //baseUrl: string = "http://localhost:3000/";
  baseUrl: string = "http://52.150.39.58/api/";

  getArticles(): Observable<Article[]> 
  {
    //return this.http.get(this.baseUrl + 'Articles');
    return this.http.get<Article[]>(this.baseUrl + 'Articles');
  }

  getArticle(id: number): Observable<Article>
  {
    //return this.http.get(this.baseUrl + `Articles/${id}`);
    return this.http.get<Article>(this.baseUrl + 'Articles/' + id);
  }

  createArticle(article: Article): Observable<Article>
  {
    //return this.http.post(this.baseUrl + 'Articles', Article);
    return this.http.post<Article>(this.baseUrl + 'Articles', Article);
  }

  editArticle(article: Article, id: number): Observable<Article>
  {
    //return this.http.put(this.baseUrl + `Articles/edit/${id}`, Article);
    return this.http.put<Article>(this.baseUrl + 'Articles/' + id, Article);
  }

  getLeagueArticles(): Observable<LeagueArticle[]> 
  {
    //return this.http.get<LeagueArticle[]>(this.baseUrl + 'leagueArticles');
    return this.http.get<LeagueArticle[]>(this.baseUrl + 'News/league');
  }

  getPinnedLeagueArticles(): Observable<LeagueArticle[]> 
  {
    return this.http.get<LeagueArticle[]>(this.baseUrl + 'News/league/pinned');
  }

  getLeagueArticle(id: number): Observable<LeagueArticle>
  {
    //return this.http.get<LeagueArticle>(this.baseUrl + 'leagueArticles/' + id);
    return this.http.get<LeagueArticle>(this.baseUrl + 'News/league/' + id);
  }

  createLeagueArticle(leagueArticle: any): Observable<LeagueArticle>
  {
    let art: LeagueArticle = leagueArticle;
    //return this.http.post<LeagueArticle>(this.baseUrl + 'leagueArticles', art);
    return this.http.post<LeagueArticle>(this.baseUrl + 'News/league', art);
  }

  editLeagueArticle(leagueArticle: any, id: number): Observable<LeagueArticle>
  {
    let art: LeagueArticle = leagueArticle;
    //return this.http.put<LeagueArticle>(this.baseUrl + 'leagueArticles/' + id, art);
    return this.http.put<LeagueArticle>(this.baseUrl + 'News/Team/' + id, art);
  }

  getTeamArticles(): Observable<TeamArticle[]> 
  {
    //return this.http.get<TeamArticle[]>(this.baseUrl + 'teamArticles');
    return this.http.get<TeamArticle[]>(this.baseUrl + 'News/team');
  }

  getPinnedTeamArticles(): Observable<TeamArticle[]> 
  {
    return this.http.get<TeamArticle[]>(this.baseUrl + 'News/team/pinned');
  }

  getTeamArticle(id: number): Observable<TeamArticle>
  {
    //return this.http.get<TeamArticle>(this.baseUrl + 'teamArticles/' + id);
    return this.http.get<TeamArticle>(this.baseUrl + 'News/team/' + id);
  }

  createTeamArticle(TeamArticle: any): Observable<TeamArticle>
  {
    let art: TeamArticle = TeamArticle;
    //return this.http.post<TeamArticle>(this.baseUrl + 'teamArticles', art);
    return this.http.post<TeamArticle>(this.baseUrl + 'News/team', art);
  }

  editTeamArticle(TeamArticle: any, id: number): Observable<TeamArticle>
  {
    let art: TeamArticle = TeamArticle;
    //return this.http.put<TeamArticle>(this.baseUrl + 'teamArticles/' + id, art);
    return this.http.put<TeamArticle>(this.baseUrl + 'News/team/' + id, art);
  }

}
