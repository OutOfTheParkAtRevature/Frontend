import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateLeague } from '../_models/create-league';
import { CreateVendor } from '../_models/create-vendor';
import { EditTeam } from '../_models/edit-team';
import { League } from '../_models/league';
import { Team } from '../_models/Team';
import { Vendor } from '../_models/vendor';


@Injectable({
  providedIn: 'root'
})
export class LeagueService {


  leagueUrl = "http://20.62.247.144/api/";
  constructor(private http: HttpClient) { }
  getTeams(): Observable<Team[]>
  {
    //return this.http.get(this.baseUrl + 'teams');
    return this.http.get<Team[]>(this.leagueUrl + 'team');
  }

  getTeam(teamId: string): Observable<Team>
  {
    //return this.http.get(this.baseUrl + `teams/${teamId}`);
    return this.http.get<Team>(this.leagueUrl + 'team/' + teamId);
  }

  getTeamByName(teamName: string): Observable<Team>{
    return this.http.get<Team>(this.leagueUrl + 'team/name' + teamName);
  }

  createTeam(teamName: string): Observable<Team>{
    return this.http.post<Team>(this.leagueUrl + 'team', teamName);
  }
  
  editTeam(teamId: string, model: EditTeam): Observable<Team>{
    return this.http.put<Team>(this.leagueUrl + 'team/' + teamId, model);
  }

  deleteTeam(teamId: string) : Observable<any>{
    return this.http.delete<any>(this.leagueUrl + 'team/'+ teamId);
  }

  getLeagues() : Observable<League[]>{
    return this.http.get<League[]>(this.leagueUrl + 'league');
  }

  getLeague(leagueId: string) : Observable<League>{
    return this.http.get<League>(this.leagueUrl + 'league/' + leagueId);
  }

  createLeague(model: CreateLeague): Observable<League>{
    return this.http.post<League>(this.leagueUrl + 'league', model);
  }

  editLeague(id: string, leagueName: string): Observable<League>{
    return this.http.put<League>(this.leagueUrl + 'league/' + id, leagueName);
  }

  deleteLeague(id: string): Observable<any>{
    return this.http.delete<any>(this.leagueUrl + 'league/' + id);
  }

  getVendors() : Observable<Vendor[]>{
    return this.http.get<Vendor[]>(this.leagueUrl + 'vendor');
  }

  getVendor(id: string) : Observable<Vendor>{
    return this.http.get<Vendor>(this.leagueUrl + 'vendor/' + id);
  }

  getVendorByName(name: string) : Observable<Vendor>{
    return this.http.get<Vendor>(this.leagueUrl + 'vendor/name/' + name);
  }

  createVendor(model: CreateVendor) : Observable<Vendor>{
    return this.http.post<Vendor>(this.leagueUrl + 'vendor', model);
  }

  editVendor(id: string, model: CreateVendor) : Observable<Vendor>{
    return this.http.put<Vendor>(this.leagueUrl + 'vendor/' + id, model);
  }

  deleteVendor(id: string) : Observable<any>{
    return this.http.delete<any>(this.leagueUrl + 'vendor/' + id);
  }
}
