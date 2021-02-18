import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { User } from '@auth0/auth0-spa-js';
import { element } from 'protractor';
import { Team } from '../../../_models/Team';
import { AccountService } from '../../../_services/account.service';
import { DrawService } from '../../../_services/draw.service';
import { GamesService } from '../../../_services/games.service';
import { Play } from '../../../_models/Play';
import { Playbook } from 'src/app/_models/Playbook';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.css']
})

export class PlaysComponent implements OnInit 
{
  constructor(private drawService: DrawService, public accountService: AccountService) { }

  
  play: Play[] = [];
  tempPlay: Play[] = [];
  model: any = {};
  imageString: string;
  chosenplaybookId: number;
  teamId: number;
  myTeams: Team;
  TeamPlaybookList: Array<Playbook> = new Array<Playbook>() ;
  playbooks: any = {};

  ngOnInit(): void {
    this.getTeamID(); 
  }

  //gets all the plays
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
      if(element.PlaybookId == this.playbooks.id){
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

  //Gets the teamid based on current user
  getTeamID() {
    this.accountService.currentUser$.subscribe( user => {
       this.teamId = user.teamID;
       console.log(this.teamId);
      }, err => {
        console.log(err)
    })
    this.getTeamPlayBook();
  }

  //Retrieves all playbooks then sorts into a list based on teamId
  //Leaving out the nonmatching ones
  //THERES DEF A BETTER WAY TO DO THIS ON BACKEND First
  getTeamPlayBook(){ 
    this.drawService.getPlaybooks().subscribe(response =>{
      console.log(response);
      console.log(this.teamId);
      response.forEach(element => {
        console.log(element)
        if(element.teamId === this.teamId){
          this.TeamPlaybookList.push(element);
        }
      })
      console.log(this.TeamPlaybookList);
    }, err => {
        console.log(err)
    })
  }

  //Should be called by the selection button
  //Sorts the TeamplaybooksList into a single playbook based on name chosen
  //Sets the play arrays length to zero to clear previous showings of plays
  selectPlayBook(playbookName){
    this.play.length = 0;
    this.TeamPlaybookList.forEach(element => {
      if(element.name == playbookName.target.value){
        this.playbooks = element;
      }
    });
    this.chosenplaybookId = this.playbooks.id;
    console.log(this.playbooks)
    this.getPlays(); 
  }


}
