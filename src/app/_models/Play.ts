import { Byte } from "@angular/compiler/src/util";

export class Play
{
    public id: number;// string;
    public PlaybookID: number;//string;
    public Name: string;
    public Description: string;
    public ImageString: string;
    //public ImageByte: Byte[];
    public DrawnBy: string;     //user Id
    public visible: boolean;     //Approval
}
