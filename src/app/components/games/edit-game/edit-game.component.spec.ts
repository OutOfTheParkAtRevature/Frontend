import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGameComponent } from './edit-game.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditGameComponent', () => {
  let component: EditGameComponent;
  let fixture: ComponentFixture<EditGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ EditGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getHomeTeam()', () => {
    component.getHomeTeam();
  });

  it('should call getAwayTeam()', () => {
    component.getAwayTeam();
  });

  it('should call editGame()', () => {
    component.editedGame = [{}];
    component.editedGame[0].homeScore = 20;
    component.editedGame[0].awayScore = 15;
    component.editedGame[0].winningTeamID = null;
    component.editedGame[0].losingTeamID = null;
    component.editGame();
  });

  it('should call updateTeamWins()', () => {
    component.winningTeam = [{}];
    component.editedGame = [{}];
    component.winningTeam[0].wins = null;
    component.editedGame[0].winningTeamID = null;
    component.updateTeamWins();
  });

  it('should call updateWins()', () => {
    component.winningTeam = [{}];
    component.editedGame = [{}];
    component.winningTeam[0].wins = null;
    component.editedGame[0].winningTeamID = null;
    component.updateWins();
  });

  it('should call updateTeamLosses()', () => {
    component.losingTeam = [{}];
    component.editedGame = [{}];
    component.losingTeam[0].losses = null;
    component.editedGame[0].losingTeamID = null;
    component.updateTeamLosses();
  });

  it('should call updateLosses()', () => {
    component.losingTeam = [{}];
    component.editedGame = [{}];
    component.losingTeam[0].losses = null;
    component.editedGame[0].losingTeamID = null;
    component.updateLosses();
  });
});
