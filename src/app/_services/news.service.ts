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
  baseUrl: string = "http://localhost:3000/";

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
    //return this.http.get(this.baseUrl + 'leagueArticles');
    return this.http.get<LeagueArticle[]>(this.baseUrl + 'leagueArticles');
  }

  getLeagueArticle(id: number): Observable<LeagueArticle>
  {
    //return this.http.get(this.baseUrl + `leagueArticles/${id}`);
    return this.http.get<LeagueArticle>(this.baseUrl + 'leagueArticles/' + id);
  }

  createLeagueArticle(leagueArticle: LeagueArticle): Observable<LeagueArticle>
  {
    //return this.http.post(this.baseUrl + 'leagueArticles', leagueArticle);
    return this.http.post<LeagueArticle>(this.baseUrl + 'leagueArticles', leagueArticle);
  }

  editLeagueArticle(leagueArticle: LeagueArticle, id: number): Observable<LeagueArticle>
  {
    //return this.http.put(this.baseUrl + `leagueArticles/edit/${id}`, leagueArticle);
    return this.http.put<LeagueArticle>(this.baseUrl + 'leagueArticles/' + id, leagueArticle);
  }

  getTeamArticles(): Observable<TeamArticle[]> 
  {
    //return this.http.get(this.baseUrl + 'teamArticles');
    return this.http.get<TeamArticle[]>(this.baseUrl + 'teamArticles');
  }

  getTeamArticle(id: number): Observable<TeamArticle>
  {
    //return this.http.get(this.baseUrl + `teamArticles/${id}`);
    return this.http.get<TeamArticle>(this.baseUrl + 'teamArticles/' + id);
  }

  createTeamArticle(teamArticle: TeamArticle): Observable<TeamArticle>
  {
    //return this.http.post(this.baseUrl + 'teamArticles', teamArticle);
    return this.http.post<TeamArticle>(this.baseUrl + 'teamArticles', teamArticle);
  }

  editTeamArticle(teamArticle: TeamArticle, id: number): Observable<TeamArticle>
  {
    //return this.http.put(this.baseUrl + `teamArticles/edit/${id}`, teamArticle);
    return this.http.put<TeamArticle>(this.baseUrl + 'teamArticles/' + id, teamArticle);
  }

}
