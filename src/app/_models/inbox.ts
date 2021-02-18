import { Recipient } from "./recipient";

export class Inbox {
    userID: number;
    recipients: Recipient[] = [];
    //? Message ID or message Group container:::
    isRead: boolean;

}
