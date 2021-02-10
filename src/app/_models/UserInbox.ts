

export class UserInbox
{
    id: number
    userId: number;
    messageId: number;
    isRead: boolean;    //Stored in DB as a bit
}