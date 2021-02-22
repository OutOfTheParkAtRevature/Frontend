import { Recipient } from "./recipient";

export class Inbox {
    userID: string;
    recipients: Recipient[] = [];
    //? Message ID or message Group container:::
    isRead: boolean;

}
