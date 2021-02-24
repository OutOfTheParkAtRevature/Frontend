import { Team } from "./Team";


export class Game
{
    id: string;
    seasonID: string;
    homeTeamID: string;
    awayTeamID: string;
    gameDate: Date;
    winningTeam: Team;
    homeScore: number;
    awayScore: number;
    homeStatID: string;
    awayStatID: string;
    homeTeam: Team;
    awayTeam: Team;
}