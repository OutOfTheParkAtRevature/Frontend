import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GamesService } from '../../_services/games.service';
import { Team } from '../../_models/Team';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  //teams: any;
  teams: Array<Team> = new Array<Team>();

  constructor(private http: HttpClient, public gamesService: GamesService, public accountService: AccountService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(){
    this.gamesService.getTeams().subscribe(response => {
      this.teams = response;
      this.calculatePCT();
    }, err => {
      console.log(err)
    })
  }

  calculatePCT() {
    this.teams.forEach(team => {
      if(team.wins || team.losses) {
        team.winningPct = (team.wins / (team.wins + team.losses)).toPrecision(2);
      } 
    });
  }

}
