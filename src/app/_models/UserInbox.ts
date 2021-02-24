

export class UserInbox
{
    id: string;
    userId: string;
    messageId: string;
    isRead: boolean;    //Stored in DB as a bit
}