import { Byte } from "@angular/compiler/src/util";

export class Article
{
    public id: number;
    public title: string;
    public body: string;
    public team: string;
    public league: boolean;
    public visible: boolean;
    public date: Date;
    public ImageByte: Byte[];
    public isPinned: boolean;
}