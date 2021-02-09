import { Byte } from "@angular/compiler/src/util";

export class Event{
    public PlayId: number;
    public PlaybookId: number;
    public Name: string;
    public Description: string;
    public ImageString: string;
    public ImageByte: Byte[];
}