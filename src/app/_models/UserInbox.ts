

export class UserInbox
{
    id: string;
    userID: string;
    messageID: string;
    isRead: boolean;    //Stored in DB as a bit
}