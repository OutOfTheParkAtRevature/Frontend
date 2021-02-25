import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Inbox } from '../_models/inbox';
import { Message } from '../_models/Message';
import { MessageInbox } from '../_models/message-inbox';
import { RecipientList } from '../_models/RecipientList';
import { UserInbox } from '../_models/UserInbox';
//import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //baseUrl = environment.apiUrl;
  baseUrl = "http://localhost:3000/";

  //private hubConnection: signalR.HubConnection;

  //SignalR message gateway
  // public startConnection = () => {
  //   this.hubConnection = new signalR.HubConnectionBuilder()
  //                           .withUrl('https://localhost:5001/chart')
  //                           .build();
  //   this.hubConnection
  //     .start()
  //     .then(() => console.log('Connection started'))
  //     .catch(err => console.log('Error while starting connection: ' + err))
  // }

  // public addTransferChartDataListener = () => {
  //   this.hubConnection.on('transferchartdata', (data) => {
  //     this.data = data;
  //     console.log(data);
  //   });
  // }

  constructor(private http: HttpClient) { }

  getMessages(userID: number): Observable<any>
  {
    //return this.http.get(this.baseUrl + 'messages');
    return this.http.get<any>(this.baseUrl + `userInboxes/${userID}`);
  }

  getMessagesFromConversation(messageID: string) : Observable<MessageInbox>{
    return this.http.get<MessageInbox>(this.baseUrl + `messages/${messageID}`)
    
    // return this.http.get<any>(this.baseUrl + `userInboxes/${messageID}`);
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

  getUserInboxes(): Observable<UserInbox>
  {
      return this.http.get<UserInbox>(this.baseUrl + `userinboxes`);
  }

}
