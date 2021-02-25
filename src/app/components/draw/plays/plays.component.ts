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


  newPlaybook: Playbook;
  play: Play[] = [];// should view all plays
  viewablePlays: Play[] = []; // should view only viewable plays
  tempPlay: Play[] = [];
  imageString: string;
  chosenplaybookId: string;//Will be a string for guids
  teamId: string; //Will be a string for guids
  myTeams: Team;
  TeamPlaybookList: Array<Playbook> = new Array<Playbook>() ;
  playbooks: any = {};
  createNewPlaybook: boolean;
  makePlayVisible: boolean;

  ngOnInit(): void {
    this.newPlaybook = new Playbook;
    this.chosenplaybookId = '';
    this.createNewPlaybook = false;
    this.getTeamID(); 
    
  }

  //gets all the plays
  getPlays(){
    this.drawService.getPlays().subscribe(response => {
      this.tempPlay = response;
      this.getCurrentPlays();
    }, err => {
      console.log(err)
    })  
  }

//Gets current team plays as well as fills a list to contain only viewable plays
  getCurrentPlays(){
    if(this.tempPlay != []){
    this.tempPlay.forEach(element => {
      if(element.PlaybookID == this.playbooks.id){
        this.play.push(element);
        if(element.visible == true){
          this.viewablePlays.push(element);
          console.log(this.viewablePlays);
        }
      }
  
    });
  }
  }

  deletePlay(playNot: string){
    console.log(playNot);
    this.drawService.deleteMyPlay(playNot).subscribe(Response => {
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
       this.teamId = user.teamID;//.toString();
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
    this.viewablePlays.length = 0;
    this.TeamPlaybookList.forEach(element => {
      if(element.name == playbookName.target.value){
        this.playbooks = element;
      }
    });
    this.chosenplaybookId = this.playbooks.id;
    console.log(this.playbooks)
 
    this.getPlays(); 
  }

  //true or false if the crate play view should appear
  userWantsNewPlaybook(){
    if(!this.createNewPlaybook){this.createNewPlaybook = true;}
    else{this.createNewPlaybook = false};
  }

  //Saves the selected play with a name then calls the method to 
  //get playbooks. New playbook should recieve ID from DB
  savePlaybook(){
    if(this.newPlaybook.name == null || !this.newPlaybook.name.replace(/\s/g, '').length ){
      alert("You must choose a name for your playbook");
    }
    else{
      this.newPlaybook.teamId = this.teamId;
    
    console.log(this.newPlaybook);
    this.drawService.createPlaybooks(this.newPlaybook).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err)
    })   
    alert("Playbook Created");
    this.TeamPlaybookList.length = 0;
    this.getTeamPlayBook();
    this.getPlays();
  }
  }

  makeViewable(id){
    this.play.forEach(element => {
      if(element.id == id){
        element.visible = true;
        this.drawService.editPlay(element.id, element).subscribe(response => {
          console.log(response);
        });
      }
      
      console.log(element);
    });
  }

}
