import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Play } from '../_models/Play';
import { Playbook } from '../_models/Playbook';

@Injectable({
  providedIn: 'root'
})

export class DrawService {

  //baseUrl = environment.apiUrl;
  //baseUrl: string = "http://40.88.226.19/api/";
  baseUrl: string ="http://localhost:3000/api/";
  constructor(private http: HttpClient) { }

  createDrawing(model: Play): Observable<Play>
  {
    //return this.http.post(this.baseUrl + 'playbooks/plays', model);
    return this.http.post<Play>(this.baseUrl + 'plays', model);
  }
 
  getPlays(): Observable<Play[]>
  {
    //return this.http.get(this.baseUrl + 'playbooks/plays');
    return this.http.get<Play[]>(this.baseUrl + 'plays');
  }

  createPlaybooks(model: Playbook): Observable<Playbook>
  {
    return this.http.post<Playbook>(this.baseUrl + 'playbooks', model);
  }

  getPlaybooks(): Observable<Playbook[]>
  {
    //return this.http.get(this.baseUrl + 'playbooks');
    return this.http.get<Playbook[]>(this.baseUrl + 'playbooks');
  }

 getPlaybooksByID(teamId: number): Observable<Playbook>
 {
    //return this.http.get(this.baseUrl + `playbooks/${teamId}`);
    return this.http.get<Playbook>(this.baseUrl + 'playbooks/' + teamId);
  }
  
  deletePlay(playId: number): Observable<Play>
  {
    //return this.http.delete(this.baseUrl + `playbooks/plays/delete/${playId}`);
    return this.http.delete<Play>(this.baseUrl + 'plays/' + playId);
  }

  editPlay(id:number, model: Play): Observable<Play> //NEEDS TO BE A STRING ID:
  {
    
    return this.http.put<Play>(this.baseUrl + 'plays/' + id, model);
  }
 
}
