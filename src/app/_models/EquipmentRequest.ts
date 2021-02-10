import { Equipment } from "./Equipment";
import { Team } from "./Team";
import { User } from "./User";


export class EquipmentRequest
{
    requestId: number;
    userId: string;
    teamId: number;
    requestDate: string;
    message: string;
    itemId: number;
    status: string;

    team: Team;
    user: User;
    item: Equipment;
}