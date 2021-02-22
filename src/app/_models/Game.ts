import { Team } from "./Team";


export class Game
{
    id: string;
    seasonId: string;
    homeTeamId: string;
    awayTeamId: string;
    gameDate: Date;
    winningTeam: string;
    homeScore: number;
    awayScore: number;
    homeStatId: string;
    awayStatId: string;
}