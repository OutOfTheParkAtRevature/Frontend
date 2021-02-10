import { Byte } from "@angular/compiler/src/util";

export class Article
{
    id: number;
    title: string;
    body: string;
    team: string;
    league: boolean;
    visible: boolean;
    date: Date;
    public ImageByte: Byte[];
}