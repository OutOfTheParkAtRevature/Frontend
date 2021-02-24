import { Equipment } from "./Equipment";
import { Team } from "./Team";
import { User } from "./User";


export class EquipmentRequest
{
    //requestId: number;
    id: number;
    userId: string;
    teamId: string;
    requestDate: string;
    message: string;
    itemId: number;
    status: string;

    team: Team;
    user: User;
    item: Equipment;
}