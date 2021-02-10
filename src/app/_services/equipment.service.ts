import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipment } from '../_models/Equipment';
import { EquipmentRequest } from '../_models/EquipmentRequest';
import { Team } from '../_models/Team';
import { User } from '../_models/User';


@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  //baseUrl = environment.apiUrl;
  baseUrl: string = "localhost:3000/";
  constructor(private http: HttpClient) { }

  
  getRequest(id: number): Observable<EquipmentRequest>
  {
    //return this.http.get(this.baseUrl + `equipment/${id}`);
    return this.http.get<EquipmentRequest>(this.baseUrl + 'equipment/' + id);
  }

  getRequests(): Observable<EquipmentRequest[]>
  {
    //return this.http.get(this.baseUrl + 'equipment');
    return this.http.get<EquipmentRequest[]>(this.baseUrl + 'equipmentRequests');
  }

  createRequest(model: EquipmentRequest): Observable<EquipmentRequest>
  {
    //return this.http.post(this.baseUrl + 'equipment', model);
    return this.http.post<EquipmentRequest>(this.baseUrl + 'equipmentRequests', model);
  }

  editRequest(id: string, model: EquipmentRequest): Observable<EquipmentRequest>
  {
    //return this.http.put(this.baseUrl + `equipment/edit/${id}`, model);
    return this.http.put<EquipmentRequest>(this.baseUrl + 'equipment/' + id, model);
  }

  getTeam(teamId: number): Observable<Team>
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
    //return this.http.get(this.baseUrl + `equipment/items`);
    return this.http.get<Equipment[]>(this.baseUrl + 'equipments');
  }

  getItem(id: number): Observable<Equipment> 
  {
    //return this.http.get(this.baseUrl + `equipment/items/${id}`);
    return this.http.get<Equipment>(this.baseUrl + 'equipments/' + id);
  }

}
