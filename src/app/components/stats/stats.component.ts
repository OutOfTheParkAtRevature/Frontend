import { Component, OnInit } from '@angular/core';
import { BaseballStatistic } from 'src/app/_models/BaseballStatistic';
import { CreateTeamGame } from 'src/app/_models/create-team-game';
import { CreatePlayerGameDto } from 'src/app/_models/createPlayerGame';
import { PlayerGame } from 'src/app/_models/PlayerGame';
import { TeamGame } from 'src/app/_models/TeamGame';
import { StatServiceService } from 'src/app/_services/stat-service.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private statService: StatServiceService) { }

  getAllTeamStats: TeamGame[];
  getAllTeamGameStats: TeamGame[];
  teamOverallStats: TeamGame;
  teamGames: TeamGame;
  selectedPlayerStats: PlayerGame;
  selectedPlayerGames: PlayerGame;
  playerOverallStats: PlayerGame[];
  playerOverallGameStats: PlayerGame[];
  allPlayersStats: PlayerGame[];
  baseball: BaseballStatistic;

  ngOnInit(): void {
  }

  //Get a specific player's overall stats
  getSelectedPlayerStats(id: string){
    this.statService.getPlayerOverallStats(id).subscribe(response => {
      this.selectedPlayerStats = response;
    },
    err => {
      console.log(err)
    })
  }

  //Gets stats for a player in a specific game
  getPlayerGameStats(id: string, gameId: string){
    this.statService.getPlayerGameStatistic(id, gameId).subscribe(response => {
      this.selectedPlayerGames = response;
    },
    err => {
      console.log(err)
    })
  }

  //Gets all stats for all players in all games
  getAllPlayersGameStats(id: string, gameId: string){
    this.statService.getPlayerGameStatistics().subscribe(response => {
      this.playerOverallGameStats = response;
    },
    err => {
      console.log(err)
    })
  }

  //Get all players overall stats
  getAllPlayersStats(){
    this.statService.getPlayersOverallStats().subscribe(response => {
      this.playerOverallStats = response;
    },
    err => {
      console.log(err)
    })
  }

  //create a stat for a player in a game
  createPlayerBaseballStat(create: CreatePlayerGameDto){
    this.statService.createPlayerBaseballStatistic(create).subscribe(response => {
      console.log(response);
    },
    err => {
      console.log(err)
    })
  }

  //Gets stats for a team in a specific game
  getTeamGameStats(teamId: string, gameId: string){
    this.statService.getTeamGameStatistic(teamId, gameId).subscribe(response => {
      this.teamGames = response;
    },
    err => {
      console.log(err)
    })
  }

  //Gets stats for all teams in all games
  getAllTeamsGameStats(){
    this.statService.getTeamGameStatistics().subscribe(response => {
      this.getAllTeamGameStats = response;
    },
    err => {
      console.log(err)
    })
  }

  //Get all teams overall stats
  getAllTeamsStats(){
    this.statService.getTeamsOverallStats().subscribe(response => {
      this.getAllTeamStats = response;
    },
    err => {
      console.log(err)
    })
  }

  //Get a specific team's overall stats
  getTeamStats(teamId: string){
    this.statService.getTeamOverallStats(teamId).subscribe(response => {
      this.teamOverallStats = response;
    },
    err => {
      console.log(err)
    })
  }

  //create a team stat for a game
  createTeamBaseballStat(create: CreateTeamGame){
    this.statService.createTeamBaseballStatistic(create).subscribe(response => {
      console.log(response);
    },
    err => {
      console.log(err)
    })
  }

  editBaseballStat(statLineID: string, basballstatistic: BaseballStatistic){
    this.statService.editBaseballStatistic(statLineID, basballstatistic).subscribe(reponse =>{
      console.log(reponse);
    },err => {
      console.log(err)
    })
  }

  deleteBaseballStat(statlineID: string){
    this.statService.deleteBaseballStatistic(statlineID).subscribe(response => {
      console.log(response);
    })
  }

  

}

