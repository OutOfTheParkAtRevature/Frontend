import { Team } from "./Team";


export class Game
{
    //gameId: number;
    id: number;
    homeTeamId: number;
    awayTeamId: number;
    //gameDate: string;
    gameDate: Date;
    winningTeam: number;
    homeScore: number;
    awayScore: number;
    homeTeam: Team;
    awayTeam: Team;
    winner: Team;
    
    statistic1: string;
    statistic2: string;
    statistic3: string;
}