import { Recipient } from "./recipient";


export class UserInbox
{
    id: string;
    userID: string;
    messageID: string;
    recipients: Recipient[] = [];
    isRead: boolean;  
}