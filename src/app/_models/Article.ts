import { Byte } from "@angular/compiler/src/util";

export class Article
{
    //public id: number;
    public articleID: string;
    public title: string;
    //public body: string;
    public content: string;
    //public team: string;
    //public league: boolean;
    public isVisible: boolean;
    public date: Date; 
    //public ImageByte: Byte[];
    public isPinned: boolean;
    public teamID: string;
}

export class TeamArticle extends Article
{
    /*
    public id: number;
    public title: string;
    public body: string;
    public teamId: number;
    public isVisible: boolean;
    public date: Date;
    public isPinned: boolean;
    */
   //public teamId: number;
}

export class LeagueArticle extends Article
{
    /*
    public id: number;
    public title: string;
    public body: string;
    public isVisible: boolean;
    public date: Date;
    public isPinned: boolean;
    */
}