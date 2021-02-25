import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Equipment } from '../_models/Equipment';
import { EquipmentRequest } from '../_models/EquipmentRequest';
import { Team } from '../_models/Team';
import { User } from '../_models/User';


@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  //baseUrl = environment.apiUrl;
  //baseUrl: string = "http://localhost:3000/";
  baseUrl: string = "http://40.88.213.53/api/";
  constructor(private http: HttpClient) { }

  
  getRequest(id: string): Observable<EquipmentRequest>
  {
    //return this.http.get<EquipmentRequest>(this.baseUrl + 'equipmentRequests/' + id);
    return this.http.get<EquipmentRequest>(this.baseUrl + 'Equipment/' + id);
  }

  getRequests(): Observable<EquipmentRequest[]>
  {
    //return this.http.get<EquipmentRequest[]>(this.baseUrl + 'equipmentRequests');
    return this.http.get<EquipmentRequest[]>(this.baseUrl + 'Equipment');
  }

  createRequest(model: EquipmentRequest): Observable<EquipmentRequest>
  {
    //return this.http.post<EquipmentRequest>(this.baseUrl + 'equipmentRequests', model);
    return this.http.post<EquipmentRequest>(this.baseUrl + 'Equipment', model);
  }

  editRequest(id: string, model: EquipmentRequest): Observable<EquipmentRequest>
  {
    //return this.http.put<EquipmentRequest>(this.baseUrl + 'equipmentRequests/' + id, model);
    return this.http.put<EquipmentRequest>(this.baseUrl + 'Equipment/edit/' + id, model);
  }

  getTeam(teamId: string): Observable<Team>
  {
    //return this.http.get(this.baseUrl + `teams/${teamId}`);
    return this.http.get<Team>(this.baseUrl + 'teams/' + teamId);
  }

  getUser(userId: string): Observable<User> 
  {
    //return this.http.get(this.baseUrl + `users/${userId}`);
    return this.http.get<User>(this.baseUrl + 'users/' + userId);
  }


  getItems(): Observable<Equipment[]> 
  {
    //return this.http.get<Equipment[]>(this.baseUrl + 'equipments');
    return this.http.get<Equipment[]>(this.baseUrl + 'Equipment/items');
  }

  getItem(id: string): Observable<Equipment> 
  {
    //return this.http.get<Equipment>(this.baseUrl + 'equipments/' + id);
    return this.http.get<Equipment>(this.baseUrl + 'Equipment/items/' + id);
  }

}
