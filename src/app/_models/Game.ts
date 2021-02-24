import { Team } from "./Team";


export class Game
{
    id: string;
    seasonID: string;
    homeTeamID: string;
    awayTeamID: string;
    gameDate: Date;
    winningTeam: string;
    homeScore: number;
    awayScore: number;
    homeStatID: string;
    awayStatID: string;
}