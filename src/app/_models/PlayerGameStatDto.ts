import { BaseballStatistic } from "./BaseballStatistic";

export interface playerGameStat {
    playerId: string;
    gameId: string;
    baseballStatistic: BaseballStatistic;
}