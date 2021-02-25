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
  //baseUrl: string = "http://52.150.39.58/api/";
  baseUrl: string ="http://localhost:3000/";

  constructor(private http: HttpClient) { }

  createDrawing(model: Play): Observable<Play>
  {
    return this.http.post<Play>(this.baseUrl + 'plays', model);
    //return this.http.post<Play>(this.baseUrl + 'Playbook/plays', model);
  }
 
  getPlays(): Observable<Play[]>
  {
    return this.http.get<Play[]>(this.baseUrl + 'plays');
    //return this.http.get<Play[]>(this.baseUrl + 'Playbook/plays');
  }

  createPlaybooks(model: Playbook): Observable<Playbook>
  {
    return this.http.post<Playbook>(this.baseUrl + 'playbooks', model);
    //return this.http.post<Playbook>(this.baseUrl + 'Playbook', model);
  }

  getPlaybooks(): Observable<Playbook[]>
  {
    return this.http.get<Playbook[]>(this.baseUrl + 'playbooks');
    //return this.http.get<Playbook[]>(this.baseUrl + 'Playbook');
  }

  getPlaybooksByID(teamId: string): Observable<Playbook>
  {
    return this.http.get<Playbook>(this.baseUrl + 'playbooks/' + teamId);
    //return this.http.get<Playbook>(this.baseUrl + 'Playbook/' + teamId);
  }
  
  deleteMyPlay(playId: string): Observable<Play>
  {
    return this.http.delete<Play>(this.baseUrl + 'plays/' + playId);
    //return this.http.delete<Play>(this.baseUrl + 'Playbook/plays/delete/' + playId);
  }

  editPlay(id: string, model: Play): Observable<Play> //NEEDS TO BE A STRING ID:
  {
    return this.http.put<Play>(this.baseUrl + 'plays/' + id, model);
    //return this.http.put<Play>(this.baseUrl + 'Playbook/plays/edit/' + id, model);
  }
 
}
