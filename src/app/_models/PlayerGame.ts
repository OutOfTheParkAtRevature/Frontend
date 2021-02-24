import { Game } from "./Game";
import { Team } from "./Team";

export class PlayerGame
{
    //All GUIDS on backend
    public userID: string; 
    public team: Team;
    public gameID: string; 
    public game: Game;
    public statLineID: string;
}