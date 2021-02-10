import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Message } from '../_models/Message';
import { RecipientList } from '../_models/RecipientList';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //baseUrl = environment.apiUrl;
  baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]>
  {
    //return this.http.get(this.baseUrl + 'messages');
    return this.http.get<Message[]>(this.baseUrl + 'messages');
  }
  
  sendMessage(message: Message): Observable<Message>
  {
    //return this.http.post(this.baseUrl + `messages/send`, message);
    return this.http.post<Message>(this.baseUrl + 'messages', message);
  }

  getRecipientLists(): Observable<RecipientList[]>
  {
    //return this.http.get(this.baseUrl + 'messages/recipientlists');
    return this.http.get<RecipientList[]>(this.baseUrl + 'recipientLists');
  }

  getRecipientList(id: string) 
  {
    //return this.http.get(this.baseUrl + `messages/recipientlists/${id}`);
    return this.http.get<RecipientList>(this.baseUrl + 'recipientLists/'  + id);
  }

}
