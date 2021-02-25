import { Message } from "./Message";

export class MessageInbox {
    id:string;
    content: Array<Message> = [];
}
