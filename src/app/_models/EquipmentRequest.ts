import { Equipment } from "./Equipment";
import { Team } from "./Team";
import { User } from "./User";


export class EquipmentRequest
{
    //requestId: number;
    id: number;
    userID: string;
    teamID: string;
    requestDate: string;
    message: string;
    itemID: number;
    status: string;

    team: Team;
    user: User;
    item: Equipment;
}