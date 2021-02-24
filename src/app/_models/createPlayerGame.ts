import { BaseballStatistic } from "./BaseballStatistic";

export interface CreatePlayerGameDto{
    playerId: string;
    gameId: string;
    BaseBallStatistic: BaseballStatistic;
}