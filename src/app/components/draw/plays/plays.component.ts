import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { User } from '@auth0/auth0-spa-js';
import { element } from 'protractor';
import { Team } from '../../../_models/Team';
import { AccountService } from '../../../_services/account.service';
import { DrawService } from '../../../_services/draw.service';
import { GamesService } from '../../../_services/games.service';
import { Play } from '../../../_models/Play';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.css']
})

export class PlaysComponent implements OnInit 
{

  constructor(private drawService: DrawService, private gamesService: GamesService, public accountService: AccountService) { }

  
  play: Play[] = [];
  tempPlay: any[];
  model: any = {};
  imageString: string;
  teamId: number;
  myTeams: Team;
  // user: User;
  playbooks: any = {};

  ngOnInit(): void {
    this.getTeamID(); 
    this.getPlays();
    //this.getTeams();
  }

  getPlays(){
    this.drawService.getPlays().subscribe(response => {
      this.model = response;
      this.tempPlay = this.model;
      this.getCurrentPlays();
    }, err => {
      console.log(err)
    })
  
  
  }

  getCurrentPlays(){
    if(this.tempPlay != []){
    this.tempPlay.forEach(element => {
      if(element.playbookID == this.playbooks.teamID){
        this.play.push(element);

      }
  
    });
  }
  }

  deletePlay(playNot){
    console.log(playNot);
    this.drawService.deletePlay(playNot).subscribe(Response => {
      this.play.splice(0, this.play.length);
    console.log(Response);
      this.getPlays();
    }, err => {
      console.log(err)
    })
  }

  // getTeams(){
  //   this.gamesService.getTeams().subscribe(response => {
  //     this.model = response;
  //     this.myTeams = this.model;
  //     console.log(this.myTeams);

  //   }, err => {
  //     console.log(err)
  //   })
  // }
  
  getTeamID() {
    this.accountService.currentUser$.subscribe( user => {
       this.teamId = user.teamID;
       console.log(this.teamId);
      }, err => {
        console.log(err)
    })
    this.getTeamPlayBook(this.teamId);
  }

  getTeamPlayBook(teamId){
    this.drawService.getPlaybookByID(teamId).subscribe(response =>{
      this.playbooks = response;
      console.log(this.playbooks)
    }, err => {
        console.log(err)
    })
  }


}
