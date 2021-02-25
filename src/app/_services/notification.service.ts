import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { environment } from "../../environments/environment";
import * as signalR from "@aspnet/signalr";

import { Notification } from "../_models/Notification";
import { AccountService } from "./account.service";

@Injectable({
    providedIn: 'root'
})
export class NotificationService 
{
    //baseUrl = environment.apiUrl;
    //baseUrl: string = "http://localhost:3000/";
    baseUrl: string = "http://20.72.190.144/api/";
    private hubConnection: signalR.HubConnection;
    @Output() signalRecieved: EventEmitter<Notification> = new EventEmitter<Notification>();

    constructor(private http: HttpClient, private accountService: AccountService) 
    {
        //this.buildConnection();
        //this.startConnection();
    }


    public getNotifications(): void
    {
        this.accountService.currentUser$.subscribe
        (
            (data) =>
            {
                console.log(data);
                this.buildConnection(data.id);
                this.startConnection();
            }
        );
    }
    
    public buildConnection(uid: string): void
    {
        this.hubConnection = new signalR.HubConnectionBuilder().withUrl(this.baseUrl + "Notification/notificationresult/" + uid).build();
    }

    public startConnection(): void
    {
        this.hubConnection.start()
                            .then(() => 
                                {
                                    console.log("signalR started");
                                    this.registerSignalEvents();
                                })
                            .catch(err => 
                                {
                                    console.log("Error signalR");
                                    setTimeout(function() { this.startConnection(); }, 3000);
                                });
    }

    private registerSignalEvents(): void
    {
        this.hubConnection.on("SignalMessageRecieved", (data: Notification) => { this.signalRecieved.emit(data); });
    }
    
}
